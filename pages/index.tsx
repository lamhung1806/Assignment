/* eslint-disable @next/next/no-img-element */
import { Button, Table } from "react-bootstrap";
import { Header } from "../src/components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserThunk } from "../src/redux/User/UserThunk";
import { sCurrentPage, sUserList } from "../src/redux/User/UserSelector";
import { User } from "../src/type/user";
import { next, previos } from "../src/redux/User/UserAction";

const Home = () => {
  const dispatch = useDispatch();
  const userList = useSelector(sUserList);
  const CurrentPage = useSelector(sCurrentPage);

  useEffect(() => {
    dispatch(getUserThunk(CurrentPage));
  }, [CurrentPage]);
  const handlePrevios = () => {
    if (CurrentPage > 1) {
      dispatch(previos());
    }
  };
  const handleNext = () => {
    if (CurrentPage < 10) {
      dispatch(next());
    }
  };
  return (
    <div>
      <Header />
      <div className="pagination justify-content-center mt-3">
        <Button onClick={handlePrevios} size="sm" variant="warning">
          Previos
        </Button>
        <p className="curentPage mx-3">{CurrentPage}</p>
        <Button onClick={handleNext} size="sm" variant="primary">
          Next
        </Button>
      </div>
      <Table className="mt-4" striped bordered hover>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>User Name</th>
            <th>Thumbnail Icon</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((data: User, id: number) => (
            <tr key={id}>
              <td>{`${data.name?.title} ${data.name?.first} ${data.name?.last}`}</td>
              <td>{data.login?.username}</td>
              <td>
                <img src={`${data.picture.thumbnail}`}></img>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
