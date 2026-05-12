
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar 
} from 'recharts';

const data = [
  { name: '2019', growth: 24, research: 15 },
  { name: '2020', growth: 18, research: 22 },
  { name: '2021', growth: 45, research: 30 },
  { name: '2022', growth: 38, research: 40 },
  { name: '2023', growth: 52, research: 45 },
  { name: '2024', growth: 65, research: 55 },
];

export const GrowthChart = () => (
  <div className="h-[300px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#C5A059" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#C5A059" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#ffffff50', fontSize: 12 }} 
        />
        <YAxis 
          hide 
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#0A192F', border: '1px solid #ffffff20', borderRadius: '8px' }}
          itemStyle={{ color: '#C5A059' }}
        />
        <Area 
          type="monotone" 
          dataKey="growth" 
          stroke="#C5A059" 
          strokeWidth={3}
          fillOpacity={1} 
          fill="url(#colorGrowth)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export const ResearchStats = () => (
  <div className="h-[300px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#ffffff50', fontSize: 12 }} 
        />
        <Tooltip 
          cursor={{ fill: 'rgba(255,255,255,0.05)' }}
          contentStyle={{ backgroundColor: '#0A192F', border: '1px solid #ffffff20', borderRadius: '8px' }}
        />
        <Bar dataKey="research" fill="#10B981" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
