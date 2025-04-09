<template>
  <div class="project-progress w-[80vw]" >
    <!-- Progress Summary Cards -->
    <div class="progress-cards">
      <div class="card">
        <h3>Total Tasks</h3>
        <div class="value">{{ summary.totalTasks }}</div>
      </div>
      <div class="card">
        <h3>done</h3>
        <div class="value">{{ summary.doneTasks }} ({{ summary.completionPercentage }}%)</div>
      </div>
      <div class="card">
        <h3>In Progress</h3>
        <div class="value">{{ summary.inProgressTasks }}</div>
      </div>
      <div class="card">
        <h3>Overdue</h3>
        <div class="value">{{ summary.overdueTasks }}</div>
      </div>
    </div>

    <!-- Progress Charts -->
    <div class="chart-container">
      <div class="chart">
        <h3>Project Completion</h3>
        <apexchart
          type="radialBar"
          height="300"
          :options="completionChartOptions"
          :series="completionSeries"
        />
      </div>
      <div class="chart">
        <h3>Task Status Distribution</h3>
        <apexchart
          type="donut"
          height="300"
          :options="statusChartOptions"
          :series="statusSeries"
        />
      </div>
    </div>

    <!-- Timeline Chart -->
    <div class="timeline-chart">
      <h3>Project Timeline</h3>
      <apexchart
        type="rangeBar"
        height="400"
        :options="timelineChartOptions"
        :series="timelineSeries"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import type { ApexOptions } from 'apexcharts';

// Register the component
const apexchart = VueApexCharts;

// Types
interface ProjectTask {
  id: string;
  name: string;
  status: 'not_started' | 'in_progress' | 'done' | 'overdue';
  startDate: Date;
  endDate: Date;
  progress: number; // 0-100
  assignee: string;
}

// Sample data - replace with your actual data source
const projectTasks = ref<ProjectTask[]>([
  {
    id: '1',
    name: 'SLA-01',
    status: 'done',
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-15'),
    progress: 100,
    assignee: 'John Doe'
  },
  {
    id: '2',
    name: 'SLA-02',
    status: 'in_progress',
    startDate: new Date('2025-01-10'),
    endDate: new Date('2025-02-20'),
    progress: 65,
    assignee: 'Jane Smith'
  },
  {
    id: '3',
    name: 'SLA-04',
    status: 'not_started',
    startDate: new Date('2025-02-15'),
    endDate: new Date('2025-03-05'),
    progress: 0,
    assignee: 'Mike Johnson'
  },
  {
    id: '4',
    name: 'MORPH-01',
    status: 'in_progress',
    startDate: new Date('2025-01-25'),
    endDate: new Date('2025-02-10'),
    progress: 30,
    assignee: 'Sarah Williams'
  },
  {
    id: '5',
    name: 'Finalising',
    status: 'not_started',
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-03-15'),
    progress: 0,
    assignee: 'David Brown'
  }
]);

// Computed summary
const summary = computed(() => {
  const totalTasks = projectTasks.value.length;
  const doneTasks = projectTasks.value.filter(t => t.status === 'done').length;
  const inProgressTasks = projectTasks.value.filter(t => t.status === 'in_progress').length;
  const overdueTasks = projectTasks.value.filter(t => {
    return t.status !== 'done' && new Date(t.endDate) < new Date();
  }).length;

  return {
    totalTasks,
    doneTasks,
    inProgressTasks,
    overdueTasks,
    completionPercentage: Math.round((doneTasks / totalTasks) * 100)
  };
});

// Completion Radial Chart
const completionSeries = computed(() => [summary.value.completionPercentage]);
const completionChartOptions = ref<ApexOptions>({
  chart: {
    type: 'radialBar',
    sparkline: {
      enabled: false
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        margin: 0,
        size: '70%'
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: '#333',
          fontSize: '13px'
        },
        value: {
          color: '#333',
          fontSize: '30px',
          show: true
        }
      },
      track: {
        background: '#e0e0e0',
        strokeWidth: '97%',
        margin: 5
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
    }
  },
  stroke: {
    dashArray: 4
  },
  labels: ['Completion'],
  colors: ['#4CAF50']
});

// Status Distribution Donut Chart
const statusSeries = computed(() => [
  projectTasks.value.filter(t => t.status === 'done').length,
  projectTasks.value.filter(t => t.status === 'in_progress').length,
  projectTasks.value.filter(t => t.status === 'not_started').length,
  projectTasks.value.filter(t => t.status === 'overdue').length
]);

const statusChartOptions = ref<ApexOptions>({
  chart: {
    type: 'donut'
  },
  labels: ['done', 'In Progress', 'Not Started', 'Overdue'],
  colors: ['#4CAF50', '#2196F3', '#9E9E9E', '#F44336'],
  legend: {
    position: 'bottom'
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            label: 'Total Tasks',
            color: '#333'
          }
        }
      }
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
});

// Timeline Gantt Chart
const timelineSeries = computed(() => [{
  name: 'Tasks',
  data: projectTasks.value.map(task => ({
    x: task.name,
    y: [
      task.startDate.getTime(),
      task.endDate.getTime()
    ],
    fillColor: getStatusColor(task.status),
    goals: [
      {
        name: 'Progress',
        value: new Date(
          task.startDate.getTime() + 
          (task.endDate.getTime() - task.startDate.getTime()) * (task.progress / 100)
        ).getTime(),
        strokeColor: '#FFA500'
      }
    ]
  }))
}]);

const timelineChartOptions = ref<ApexOptions>({
  chart: {
    type: 'rangeBar',
    height: 350,
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '50%',
      rangeBarGroupRows: true
    }
  },
  colors: ['#4CAF50', '#2196F3', '#9E9E9E', '#F44336'],
  fill: {
    type: 'solid',
    opacity: 0.8
  },
  xaxis: {
    type: 'datetime'
  },
  legend: {
    position: 'top'
  },
  tooltip: {
    custom: function({ series, seriesIndex, dataPointIndex, w }) {
      const task = projectTasks.value[dataPointIndex];
      const start = new Date(w.globals.series[seriesIndex][dataPointIndex][0]);
      const end = new Date(w.globals.series[seriesIndex][dataPointIndex][1]);
      const progressDate = new Date(w.globals.series[seriesIndex][dataPointIndex][2]);
      
      return `
        <div class="p-2">
          <strong>${task.name}</strong><br/>
          <span>Status: ${formatStatus(task.status)}</span><br/>
          <span>Assignee: ${task.assignee}</span><br/>
          <span>Start: ${start.toDateString()}</span><br/>
          <span>End: ${end.toDateString()}</span><br/>
          <span>Progress: ${task.progress}%</span>
        </div>
      `;
    }
  }
});

// Helper functions
function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    done: '#4CAF50',
    in_progress: '#2196F3',
    not_started: '#9E9E9E',
    overdue: '#F44336'
  };
  return colors[status] || '#9E9E9E';
}

function formatStatus(status: string): string {
  const statusMap: Record<string, string> = {
    done: 'done',
    in_progress: 'In Progress',
    not_started: 'Not Started',
    overdue: 'Overdue'
  };
  return statusMap[status] || status;
}

// Load data (example with API)
onMounted(async () => {
  try {
    // const response = await fetch('/api/project-tasks');
    // projectTasks.value = await response.json();
  } catch (error) {
    console.error('Error loading project data:', error);
  }
});
</script>

<style scoped>
.project-progress {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.progress-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card h3 {
  margin-top: 0;
  color: #666;
  font-size: 16px;
}

.card .value {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}

.chart-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.chart {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.chart h3 {
  margin-top: 0;
  text-align: center;
}

.timeline-chart {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.timeline-chart h3 {
  margin-top: 0;
  text-align: center;
}

@media (max-width: 768px) {
  .chart-container {
    grid-template-columns: 1fr;
  }
}
</style>