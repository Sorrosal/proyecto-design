import datos from "../datos.json";

function Section({ data }) {
  return (
    <div>
      <h5>{data.titulo}</h5>
      {
        <ul className="nav flex-column">
          {data.links.map((i, index) => (
            <li key={index}>
              <a className="text-decoration-none" href={i.url}>
                {i.titulo}
              </a>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
export function Footer() {
  return (
    <div className="d-flex justify-content-between mt-4">
      <div className="fs-4">{datos.header.nombre}</div>
      {datos.footer.map((item, index) => (
        <Section key={index} data={item}></Section>
      ))}
    </div>
  );
}
