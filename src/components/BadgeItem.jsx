const BadgeItem = (prop) => {
    return (
    <li
      className="font-bold text-green-800 hover:bg-green-700 hover:text-white px-2 py-0.5 rounded hover:scale-110 cursor-pointer"
      
    >
      {prop.navLink}
    </li>
  );
};


export default BadgeItem;