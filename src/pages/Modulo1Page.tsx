export const Modulo1Page = () => {
    // 1) Inferencia vs anotación
    const saga = "Saiyan Saga"; // inferido
    const horasEntrenamiento: number = 36; // anotado

    // 2) Tipos básicos
    const guerrero: string = "Goku";
    const ki: number = 90001; // number para enteros y decimales
    const enCombate: boolean = true;

    // 3) Arrays
    const equipoZ: string[] = ["Goku", "Vegeta", "Gohan", "Piccolo"];

    // 4) Tuplas
    const coordenadas: [number, number, string] = [42, 17, "hola"];

    // 5) Función tipada (parámetros + retorno)
    function calcularDanio(
        base: number,
        multiplicador: number
    ): number {
        return base * multiplicador;
    }

    // 6) null y undefined
  //  let transformacion: string | null = null;
  //  transformacion = "Super Saiyan";

   // let estrategia: string | undefined = undefined;
    //estrategia = "Transformarse a ultra instinto";

    // 7) any y unknown
   // let variableLibre: any = "Semilla del ermitaño";
   // variableLibre = 2;

   
    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
            <div className="mx-auto max-w-3xl p-8">

                <header className="mb-8">
                    <h1 className="text-3xl font-semibold text-blue-500">
                        React + TypeScript - Módulo 1
                    </h1>

                    <p className="text-sm text-neutral-400">
                        Fundamentos: tipos básicos, arrays y tuplas
                    </p>
                </header>

                <section className="mb-8">
                    <h2 className="text-xl font-medium text-blue-300 mb-2">
                        Inferencia y tipos básicos
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
                        <div>Saga: {saga}</div>

                        <div>
                            Horas de entrenamiento: {horasEntrenamiento}
                        </div>

                        <div>
                            Guerrero: {guerrero}
                        </div>

                        <div>
                            Ki: {ki}
                        </div>

                        <div>
                            En combate: {enCombate ? "Sí" : "No"}
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-medium text-blue-300 mb-2">
                        Arrays
                    </h2>

                    <div className="text-neutral-300">
                        Equipo Z: {equipoZ.join(", ")}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-medium text-blue-300 mb-2">
                        Tuplas
                    </h2>

                    <div className="text-neutral-300">
                        Coordenadas [x, y, saludo]:
                        x = {coordenadas[0]},
                        y = {coordenadas[1]},
                        saludo = {coordenadas[2]}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-medium text-blue-300 mb-2">
                        Funciones tipadas
                    </h2>

                    <div className="text-neutral-300">
                        <p>
                            Daño (base 450 × multiplicador 2)
                        </p>

                        <span>
                            Resultado: {calcularDanio(450, 2)}
                        </span>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-medium text-blue-300 mb-2">
                        Null y Undefined
                    </h2>

 
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-medium text-blue-300 mb-2">
                        Any y Unknown
                    </h2>
                </section>

            </div>
        </main>
    );
};