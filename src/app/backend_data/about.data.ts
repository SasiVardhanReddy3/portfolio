export type Highlight = { icon: string; title: string; desc: string; };
export type Stat = { value: string; label: string; colorClass?: string; };

export const HIGHLIGHTS: Highlight[] = [
  { icon: 'language',  title: 'Data Analytics',    desc: 'Reporting and Dashboard Development' },
  { icon: 'code-merge',   title: 'Machine Learning', desc: 'Creating and fine tunning state of the art Models' },
  { icon: 'cloud-binary',  title: 'Cloud Enthusiast', desc: 'Honing skills in AWS and cloud based development ' },
];

export const STATS: Stat[] = [
  { value: '1+',  label: 'Years Experience',   colorClass: 'text-sky-300' },
  { value: '7+', label: 'Projects Completed', colorClass: 'text-fuchsia-300' },
  { value: '10+', label: 'Technologies',       colorClass: 'text-emerald-300' },
];