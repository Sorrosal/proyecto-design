import datos from "../datos.json";
function Logo() {
  return <div>Logo</div>;
}

export function Header() {
  return (
    <div className="my-2 d-flex justify-content-between">
      <div className="d-flex">
        <Logo></Logo>
        <p className="fs-4">{datos.header.nombre}</p>
      </div>

      <div>
        {datos.header.links.map((item, index) => (
          <a key={index} className="mx-3 text-decoration-none" href={item.url}>
            {item.texto}
          </a>
        ))}
      </div>
    </div>
  );
}
