<template>
  <div>
    <div ref="mapContainer" class="w-[42vw] h-[42vh]"></div>
    <div v-if="isLoading" class="loading-indicator">Loading...</div>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script lang="js">
import { defineComponent, ref, onMounted, nextTick } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { BASE_URL } from "../base.url.utils";
import axios from "axios";

export default defineComponent({
  name: "LeafletMap",
  props: {
    uuid: {
      type: String,
      required: true,
      validator: (value) => {
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
      }
    },
    initialView: {
      type: Array,
      default: () => [51.505, -0.09]
    },
    initialZoom: {
      type: Number,
      default: 13
    },
    polygonColor: {
      type: String,
      default: "red"
    }
  },
  setup(props) {
    const map = ref(null);
    const mapContainer = ref(null);
    const polygonku = ref(null);
    const isLoading = ref(false);
    const error = ref(null);

    const initMap = () => {
      if (mapContainer.value && !map.value) {
        map.value = L.map(mapContainer.value).setView(props.initialView, props.initialZoom);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map.value);
      }
    };

    const createPolygon = async () => {
      try {
        isLoading.value = true;
        error.value = null;
        
        const url = `${BASE_URL}polygon/${props.uuid}`;
        const response = await axios.get(url);
        
        if (!response.data?.result) {
          throw new Error("Invalid response format");
        }

        const dataPolygon = response.data.result;
        const polygonCoordinates = dataPolygon.map(
          ({ latitude, longitude }) => [latitude, longitude]
        );

        if (map.value) {
          // Clear existing polygon
          if (polygonku.value) {
            map.value.removeLayer(polygonku.value);
          }
          
          // Create new polygon
          polygonku.value = L.polygon(polygonCoordinates, { 
            color: props.polygonColor,
            fillOpacity: 0.5
          }).addTo(map.value);
          
          // Fit bounds to polygon
          map.value.fitBounds(polygonku.value.getBounds());
        }
      } catch (err) {
        console.error("Error fetching polygon data:", err);
        error.value = "Failed to load polygon data";
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      nextTick(() => {
        initMap();
        createPolygon();
      });
    });

    return {
      map,
      mapContainer,
      polygonku,
      isLoading,
      error
    };
  }
});
</script>

<style scoped>
.loading-indicator, .error-message {
  padding: 0.5rem;
  margin-top: 0.5rem;
}
.error-message {
  color: red;
}
</style>