import {useState} from 'react';
import classnames from 'classnames';

type BoardMember = {
  label?: string;
  title?: string;
  name?: string;
  email?: string;
};

type FullBoard = {
  diretoria: BoardMember[];
  conselho: BoardMember[];
  coordenadores: BoardMember[];
};

type TabProps = {
  board: FullBoard;
};

const Tabs = ({board}: TabProps) => {
  const [activeTab, setActiveTab] = useState('diretoria');

  const changeTab = (newTab: string) => setActiveTab(newTab);

  const generateListFromRoles = (roles: BoardMember[]) =>
    roles.map((role: BoardMember) => (
      <div
        className="flex flex-col md:flex-row justify-between gap-4"
        key={role?.title ?? role.label}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <p className="font-[900] text-[16px]">{role?.title ?? role.label}:</p>
          <p className="text-[16px]">{role.name}</p>
        </div>
        <span className="text-[16px]">{role.email ?? 'N/A'}</span>
      </div>
    ));

  return (
    <div className="flex flex-col gap-8">
      {/* Tab Items */}
      <div className="flex">
        {/* Tab 1 */}
        <button
          onClick={() => changeTab('diretoria')}
          className={classnames(
            'w-full border border-black p-4 font-[600]  hover:text-white text-xl transition border-r-none',
            {
              'text-white bg-primary': activeTab === 'diretoria',
              'text-black hover:bg-primary-800': activeTab !== 'diretoria',
            }
          )}
        >
          Diretoria Executiva
        </button>
        {/* Tab 2 */}
        <button
          onClick={() => changeTab('conselho')}
          className={classnames(
            'w-full border border-black p-4 font-[600]  hover:text-white text-xl transition border-r-none',
            {
              'text-white bg-primary': activeTab === 'conselho',
              'hover:bg-primary-800': activeTab !== 'conselho',
            }
          )}
        >
          Conselho Consultivo Fiscal
        </button>
        {/* Tab 3 */}
        <button
          onClick={() => changeTab('coordenadores')}
          className={classnames(
            'w-full border border-black p-4 font-[600]  hover:text-white text-xl transition',
            {
              'text-white bg-primary': activeTab === 'coordenadores',
              'hover:bg-primary-800': activeTab !== 'coordenadores',
            }
          )}
        >
          Diretoria Executiva
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'diretoria' && (
        <div className="border w-full max-w-[100%] lg:max-w-[70%] p-8 flex flex-col gap-4">
          {generateListFromRoles(board?.diretoria)}
        </div>
      )}
      {activeTab === 'conselho' && (
        <div className="border w-full max-w-[100%] lg:max-w-[70%] p-8 flex flex-col gap-4">
          {generateListFromRoles(board?.conselho)}
        </div>
      )}
      {activeTab === 'coordenadores' && (
        <div className="border w-full max-w-[100%] lg:max-w-[70%] p-8 flex flex-col gap-4">
          {generateListFromRoles(board?.coordenadores)}
        </div>
      )}
    </div>
  );
};

export default Tabs;
