import Timeline from "$components/timeline";
import BreadCrumb from "$components/breadcrumb";
import HistoryService from "$services/history.service";
import timeline from "$types/timeline";
import { useEffect, useState } from "react";
import "./style.css";

const index = () => {
  const [items, setItems] = useState<timeline[]>([{
    id: 0,
    title: "",
    content: "",
    type: '',
    date: ''
  }])
  useEffect(() => {
    retrieve();
  }, []);
  const retrieve = () => HistoryService.getAll()
    .then(r => setItems(r.data))
    .catch((e: Error) => {
      console.log(e);
    });
  return (
    <div className="container">
      <div className="row">
        <h5 className="mb-0 flex-grow-0 pe-3"><BreadCrumb /></h5>
        <Timeline items={items} />
      </div>
    </div>
  )
}

export default index;