type HostInfoProps = {
  hostName: string;
  yearsHosting: number;
  avatarPlaceholder: string;
  description: string;
};

export const HostInfo = ({ hostName, yearsHosting, avatarPlaceholder, description }: HostInfoProps) => {
  const avatarUrl = `https://picsum.photos/seed/${encodeURIComponent(hostName)}/120/120`;

  return (
    <section className="rounded-2xl border border-[#DDDDDD] bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-[#F7F7F7]">
          <img src={avatarUrl} alt={`Avatar de ${hostName}`} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div>
          <h2 className="text-base font-semibold text-[#222222]">Anfitrión: {hostName}</h2>
          <p className="text-sm text-[#6A6A6A]">{yearsHosting} años como anfitrión</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-[#222222]">{description}</p>
    </section>
  );
};
