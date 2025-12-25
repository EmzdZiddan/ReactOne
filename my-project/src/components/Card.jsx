function Card (props) {
const {name, age, job} = props;

return (
    <div className="bg-blue-500 border-2 rounded-2xl p-5 gap-2 flex flex-col">
      <p>Nama: {name}</p>
      <p>Umur: {age}</p>
      <p>Job: {job}</p>
      <button className="text-blue-800 hover:text-gray-600">Klik</button>
    </div>
  );
}

export default Card;