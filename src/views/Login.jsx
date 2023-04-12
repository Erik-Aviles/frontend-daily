import Logo from '../../public/assets/logo.png'

const Login = () => {
  return (
    <section className='h-screen grid items-center tablet:grid-cols-9'>
      {/* crear componente {logo} */}
      <div className='hidden  h-full tablet:flex justify-center items-center gap-5 bg-pink-500  col-span-2 row-span-6'>
        <img className=' hidden laptop:block w-12' src={Logo} alt='Logo de la marca Daily' />
        <p className='hidden laptop:block text-colorMedium text-5xl tracking-[4px] laptop:text-white'>Daily</p>
      </div>

      <section className='h-[420px] laptop:h-[330px] row-span-6 tablet:col-span-7 '>
        <form className='max-w-[480px] h-full flex flex-col justify-between p-10 mx-auto'>
          {/* crear componente {logo} */}
          <div className='flex items-center justify-center gap-3 laptop:hidden '>
            <img className='w-16' src={Logo} alt='Logo de la marca Daily' />
            <p className='text-colorMedium text-4xl tablet:text-6xl tracking-[4px]'>Daily</p>
          </div>
          <div className='h-11 relative  '>
            <label className='text-slate-400 absolute -top-4 left-3 bg-white p-1' value='1'>
              Email*
            </label>
            <input
              className='h-full w-full rounded-sm border border-gray-400 hover:border-[0.5px] hover:border-colorMedium hover:transition placeholder-slate-300 px-[14px] py-[8px]'
              type='text'
              required
            />
          </div>
          <div className='h-11 relative  '>
            <label className='text-slate-400 absolute -top-4 left-3 bg-white p-1' value='1'>
              Contraseña*
            </label>
            <input
              className='h-full w-full rounded-sm border border-gray-400 hover:border-[0.5px] hover:border-colorMedium hover:transition placeholder-slate-300 px-[14px] py-[8px]'
              type='text'
              required
            />
          </div>
          <div className='h-11 flex justify-center items-center gap-5'>
            <div className='h-full w-[50%] flex justify-center items-center gap-[1px] '>
              <input className='h-full' type='checkbox' id='checkbox' />
              <label htmlFor='checkbox'>Recordarme </label>
            </div>
            <div className='relative w-[50%] '>
              <label className='text-slate-400 absolute -top-4 left-3 bg-white p-1' value='1'>
                Idioma
              </label>
              <select className='w-full h-10 rounded-sm border border-gray-400 hover:border-[0.5px] hover:border-colorMedium hover:transition px-[14px] py-[8px]'>
                <option value='2'>Ingles</option>
                <option value='2'>Espanol</option>
              </select>
            </div>
          </div>
          <button type='button' className='bg-gray-300 h-11 w-full text-slate-400 rounded-sm  border-none hover:bg-colorMedium hover:opacity-8 hover:text-white'>
            INICIAR SESION
          </button>

        </form>
      </section>
    </section>
  )
}
export default Login
