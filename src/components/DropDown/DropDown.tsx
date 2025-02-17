const Dropdown = () => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e);
    console.log(e.target.value);
  };

  return (
    <>
      <label htmlFor="testSelect">Test: </label>
      <select onChange={handleChange} id="testSelect">
        <option value="svar-a">A</option>
        <option value="svar-b">B</option>
        <option value="svar-c">C</option>
      </select>
    </>
  );
};

export default Dropdown;
