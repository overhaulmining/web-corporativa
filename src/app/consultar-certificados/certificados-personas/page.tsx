

export default function Home() {
  return (
    <div className="w-full">
        <div className="py-6 items-center max-w-6xl m-auto">
            <p className="text-xl font-bold text-center">CONSULTAR CERTIFICACIÓN</p>
            <br />
            <div className="w-full">
              <form action="" className="space-y-2 m-auto w-min">
                <label className="block text-sm" htmlFor="">Doc. Identidad:</label>
                <input type="text" id="small-input" className="block w-44 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"/>

                <label className="block text-sm" htmlFor="">N° Certificación:	</label>
                <input type="text" id="small-input" className="block w-44 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"/>
                <button type="button" className="text-white bg-blue-900 w-44 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800">
                    Buscar
                </button>
              </form>
            </div>
            <div className="mt-12 text-center ">
              <p className="font-semibold text-sm">Overhaul Mining - Ensayos y certificaciones</p>
              <p className=" text-sm">Para consultar acerca del estado de su certificación escribir a: <span className="font-semibold">informes@overhaulmining.com</span></p>
              <p className="text-sm mt-5">Copyright © 2025. All Rights Reserved.</p>
            </div>
        </div>
    </div>
  );
}
