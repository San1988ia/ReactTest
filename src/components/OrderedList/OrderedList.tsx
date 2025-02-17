type OrderedListProp = {
  animals: string[];
};

const OrderedList = ({ animals }: OrderedListProp) => {
  return (
    <>
      <h2>Animals from animals.json</h2>
      <ol>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ol>
    </>
  );
};

export default OrderedList;
