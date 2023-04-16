import {useState} from 'react';
import classnames from 'classnames';

type Activity = {
  title?: string;
  time?: string;
};

type DailyActivities = {
  man?: Activity[];
  tar?: Activity[];
  noi?: Activity[];
};

type WeeklyActivities = {
  Domingo: DailyActivities;
  Segunda: DailyActivities;
  Terça: DailyActivities;
  Quarta: DailyActivities;
  Quinta: DailyActivities;
  Sexta: DailyActivities;
  Sábado: DailyActivities;
};

type TabsProps = {
  weeklyActivities: WeeklyActivities;
};

export default function Tabs({weeklyActivities}: TabsProps) {
  type DaysOfWeek =
    | 'Domingo'
    | 'Segunda'
    | 'Terça'
    | 'Quarta'
    | 'Quinta'
    | 'Sexta'
    | 'Sábado';

  const [activeTab, setActiveTab] = useState<DaysOfWeek>('Domingo');

  const changeTab = (newTab: DaysOfWeek) => setActiveTab(newTab);

  const renderTabContent = () => (
    <div className="flex flex-col md:flex-col gap-4 w-full">
      <div className="w-full p-4 border border-black">
        <p className="font-[900]">Manhã</p>
        {activeTab &&
          weeklyActivities[activeTab].man &&
          weeklyActivities[activeTab]?.man?.map(({time, title}: Activity) => (
            <div className="flex gap-2" key={title}>
              <p className="font-[900]">{time}</p>
              <p>{title}</p>
            </div>
          ))}
      </div>
      <div className="w-full p-4 border border-black">
        <p className="font-[900]">Tarde</p>
        {activeTab &&
          weeklyActivities[activeTab].tar &&
          weeklyActivities[activeTab]?.tar?.map(({time, title}: Activity) => (
            <div className="flex gap-2" key={title}>
              <p className="font-[900]">{time}</p>
              <p>{title}</p>
            </div>
          ))}
      </div>
      <div className="w-full p-4 border border-black">
        <p className="font-[900]">Noite</p>
        {activeTab &&
          weeklyActivities[activeTab].noi &&
          weeklyActivities[activeTab]?.noi?.map(({time, title}: Activity) => (
            <div className="flex gap-2" key={title}>
              <p className="font-[900]">{time}</p>
              <p>{title}</p>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Tabs */}
      <div className="flex overflow-scroll">
        {[
          'Domingo',
          'Segunda',
          'Terça',
          'Quarta',
          'Quinta',
          'Sexta',
          'Sábado',
        ].map((day) => (
          <button
            onClick={() => changeTab(day as DaysOfWeek)}
            className={classnames(
              'w-full border border-black p-4 font-[600]  hover:text-white text-xl transition border-r-none text-[20px] leading-[29px]',
              {
                'text-white bg-primary': activeTab === day,
                'text-black hover:bg-primary-800': activeTab !== day,
              }
            )}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}
