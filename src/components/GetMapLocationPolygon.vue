<template>
    <div>
      <div ref="mapContainer" class="w-[42vw] h-[42vh]"></div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, type PropType } from "vue";
  import L, { Map, Polygon, type LatLngExpression } from "leaflet";
  import { BASE_URL } from "../base.url.utils";
  import axios from "axios";
  
  interface Position {
    coords: {
      latitude: number;
      longitude: number;
    };
  }
  
  interface DragEndEvent {
    target: {
      getLatLng: () => { lat: number; lng: number };
    };
  }
  
  interface PolygonData {
    latitude: number;
    longitude: number;
  }
  
  export default defineComponent({
    name: "LeafletMap",
    props: {
      uuid: {
        type: String as PropType<string>,
        required: true,
        validator: (value: string) => {
          // Simple UUID validation regex
          return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
        }
      },
      initialView: {
        type: Array as unknown as PropType<[number, number]>,
        default: () => [51.505, -0.09] as [number, number]
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
      const lat = ref<number>(0);
      const lng = ref<number>(0);
      const map = ref<Map | null>(null);
      const mapContainer = ref<HTMLElement | null>(null);
      const polygonku = ref<Polygon | null>(null);
      const isLoading = ref<boolean>(false);
      const error = ref<string | null>(null);
  
      onMounted(() => {
        if (mapContainer.value) {
          map.value = L.map(mapContainer.value).setView(props.initialView, props.initialZoom);
          L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          }).addTo(map.value);
        }

        createPolygon();

      });
  
      
  
      const createPolygon = async () => {
        try {
          isLoading.value = true;
          error.value = null;
          
          const url = `${BASE_URL}polygon/${props.uuid}`;
          const response = await axios.get(url);
          
          const dataPolygon: PolygonData[] = response.data.result;
          const polygonCoordinates = dataPolygon.map(({ latitude, longitude }) => [latitude, longitude] as LatLngExpression);
  
          if (map.value) {
            // Clear existing polygon if any
            if (polygonku.value) {
              map.value.removeLayer(polygonku.value);
            }
            
            polygonku.value = L.polygon(polygonCoordinates, { color: props.polygonColor }).addTo(map.value);
            map.value.fitBounds(polygonku.value.getBounds());
          }
        } catch (err) {
          console.error("Error fetching polygon data:", err);
          error.value = "Failed to load polygon data";
        } finally {
          isLoading.value = false;
        }
      };
  
      return {
        lat,
        lng,
        map,
        mapContainer,
        polygonku,
        isLoading,
        error,
        createPolygon,
      };
    },
  });
  </script>
  
  <style lang="scss" scoped></style>