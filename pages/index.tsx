/* eslint-disable @next/next/no-img-element */
import { Button, Table } from 'react-bootstrap';
import { Header } from '../src/components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getUserThunk } from '../src/redux/User/UserThunk';
import { sGetCurrentPage, sGetUserList } from '../src/redux/User/UserSelector';
import { User } from '../src/type/user';
import { next, previous } from '../src/redux/User/UserAction';
import { MAX_PAGE_NUMBER, MIN_PAGE_NUMBER } from '../src/constant/page';

const Home = (props: any) => {
  const dispatch = useDispatch();
  const userList = useSelector(sGetUserList);
  const currentPage = useSelector(sGetCurrentPage);

  useEffect(() => {
    dispatch(getUserThunk(currentPage));
  }, [currentPage]);
  const handlePrevious = useCallback(() => {
    dispatch(previous());
  }, [currentPage]);
  const handleNext = useCallback(() => {
    if (currentPage < MAX_PAGE_NUMBER) {
      dispatch(next());
    }
  }, [currentPage]);
  return (
    <div>
      <Header />
      <div className="pagination justify-content-center mt-3">
        {currentPage > MIN_PAGE_NUMBER ? (
          <Button onClick={handlePrevious} size="sm" variant="warning">
            Previous
          </Button>
        ) : (
          <Button disabled size="sm" variant="warning">
            Previous
          </Button>
        )}

        <p className="curentPage mx-3">{currentPage}</p>
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
              <td>{`${data.name.title} ${data.name.first} ${data.name.last}`}</td>
              <td>{data.login?.username}</td>
              <td>
                <img src={`${data.picture?.thumbnail}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
