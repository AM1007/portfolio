import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-white" : "text-neutral-300"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Ukraine" invert={invert}>
          <a
            href="https://www.google.com/maps/place/Kyiv,+02000/@50.4385536,30.4334196,24272m/data=!3m1!1e3!4m6!3m5!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4503596!4d30.5245025!16zL20vMDJzbjM0?authuser=0&entry=ttu"
            target="_blank"
          >
            Kyiv
          </a>
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
