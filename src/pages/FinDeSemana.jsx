import { cardsfindesemana } from "../database/cardsfindesemana";
import { CardsFinDeSemana } from "../components/CardsFinDeSemana";
import FontSizeChanger from 'react-font-size-changer';

export const FinDeSemana = () => {
  return (
    <>
    <FontSizeChanger
          targets={['#contenedor .titulo']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            up: <span style={{'fontSize': '36px'}}>A</span>,
            down: <span style={{'fontSize': '20px'}}>A</span>,
            style: {
              backgroundColor: 'red',
              color: 'white',
              WebkitBoxSizing: 'border-box',
              WebkitBorderRadius: '5px',
              width: '60px'
            },
            buttonsMargin: 10
          }}          
        />
      <section className="fondoFinDeSemana md:bg-cover bg-cover bg-no-repeat">
          <div id="contenedor">
        <section>
          <div className="flex justify-center">
            <h1 className="titulo font-bold max-w-lg md:text-2xl text-xl text-center md:pt-36 pt-28 text-gray-800">
              Actividades fin de semana
            </h1>
          </div>
          <hr className="linea-fucsia mx-auto mt-2"></hr>
        </section>
        <section className="md:py-6 px-2 mt-4 md:mb-4 mb-10">
          <div className="titulo flex flex-wrap place-content-center">
            {cardsfindesemana.map((item) => (
              <CardsFinDeSemana
                key={item.id}
                imagen={item.imagen}
                titulo={item.titulo}
                alt={item.alt}
              />
            ))}
          </div>
        </section>
        </div>

      </section>
    </>
  );
};
