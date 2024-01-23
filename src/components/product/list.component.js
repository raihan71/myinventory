import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const ListComponent = () => {
  return (
  <div className="container">
    <div className="row">
      <div className='col-12'>
          <Link className='btn btn-primary mb-2 float-end' to={"/product/create"}>
              Create Product
          </Link>
      </div>
      <div className="col-12">
          <div className="card card-body">
              <div className="table-responsive">
                  <table className="table table-bordered mb-0 text-center">
                      <thead>
                          <tr>
                              <th>Title</th>
                              <th>Description</th>
                              <th>Image</th>
                              <th>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                        {/* {
                          products.length > 0 && (
                              products.map((row, key)=>(
                                  <tr key={key}>
                                      <td>{row.title}</td>
                                      <td>{row.description}</td>
                                      <td>
                                          <img alt="text" width="50px" src={``} />
                                      </td>
                                      <td>
                                          <Link to={`/product/edit/${row.id}`} className='btn btn-success me-2'>
                                              Edit
                                          </Link>
                                          <Button variant="danger" onClick={()=>deleteProduct(row.id)}>
                                              Delete
                                          </Button>
                                      </td>
                                  </tr>
                              ))
                          )
                        } */}

                        <tr>
                            <td>sdsdsd</td>
                            <td>sdsdsdsdsdsd</td>
                            <td>
                                <img alt="text" width="50px" src={``} />
                            </td>
                            <td>
                                <Link to={`/product/edit/1`} className='btn btn-success me-2'>
                                    Edit
                                </Link>
                                <Button variant="danger">
                                    Delete
                                </Button>
                            </td>
                        </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
    </div>
  </div>
  );
}

export default ListComponent;
