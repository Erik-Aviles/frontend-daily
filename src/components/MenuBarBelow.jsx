import { FaCrosshairs, FaUserAlt, FaClipboardList, FaCog } from 'react-icons/fa'
const MenuBarBelow = () => {
  return (
    <nav className='laptop:absolute z-50 left-5 bottom-5 w-full h-14 bg-colorLayout2 flex justify-between tablet:justify-center laptop:max-w-sm laptop:shadow-lg'>
      <button className='w-[100px] tablet:w-[168px] flex flex-col justify-center items-center px-2 text-colorLighTDark'>
        <span>
          <FaCrosshairs />
        </span>
        <span>Monitoreo</span>
        <span />
      </button>

      <button className='w-[100px] first:tablet:w-[168px] flex flex-col justify-center items-center px-2 text-colorLighTDark'>
        <span>
          <FaClipboardList />
        </span>
        <span>Registro</span>
        <span />
      </button>

      <button className='w-[100px] tablet:w-[168px] flex flex-col justify-center items-center px-2 text-colorLighTDark'>
        <span>
          <FaCog />
        </span>
        <span>Ajustes</span>
        <span />
      </button>

      <button className='w-[100px] tablet:w-[168px] flex flex-col justify-center items-center px-2 text-colorLighTDark'>
        <span>
          <FaUserAlt />
        </span>
        <span>Cuenta</span>
        <span />
      </button>
    </nav>
  )
}
export default MenuBarBelow
