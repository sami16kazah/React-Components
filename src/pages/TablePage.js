import SortableTable from "../components/SortableTable";
export default function TabelPage() {
  const config = [
    {
      label: "name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const KeyFn = (rowData) => {
    return rowData.name;
  };

  const data = [
    {
      name: "orange",
      color: "bg-orange-500",
      score: 5,
    },
    {
      name: "apple",
      color: "bg-red-500",
      score: 3,
    },
    {
      name: "banana",
      color: "bg-yellow-500",
      score: 4,
    },
    {
      name: "lime",
      color: "bg-green-500",
      score: 2,
    },
  ];
  return (
    <SortableTable data={data} config={config} KeyFn={KeyFn}></SortableTable>
  );
}
