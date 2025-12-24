interface IPProtocolProps {
  online4: boolean;
  online6: boolean;
}

const IPProtocol = ({ online4, online6 }: IPProtocolProps) => {
  return (
    <div class="flex flex-row gap-2">
      <span class="badge badge-soft">
        <span
          class={`inline-block w-2 h-2 ${
            online4 ? "bg-success" : "bg-error"
          } rounded-full`}
        >
        </span>IPv4
      </span>
      <span class="badge badge-soft">
        <span
          class={`inline-block w-2 h-2 ${
            online6 ? "bg-success" : "bg-error"
          } rounded-full`}
        >
        </span>IPv6
      </span>
    </div>
  );
};

export default IPProtocol;
