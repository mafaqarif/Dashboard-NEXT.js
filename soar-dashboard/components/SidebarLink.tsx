import Image from "next/image";

interface LinkProps {
  title: string;
  imageUrl: string;
}
const SidebarLink: React.FC<LinkProps> = ({ title, imageUrl }) => {
  return (
    <div className="sidebar-link">
      <Image src={imageUrl} alt={imageUrl} width={25} height={25} />
      <h3>{title}</h3>
    </div>
  );
};

export default SidebarLink;
