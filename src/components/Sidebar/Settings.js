import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import "./Settings.css";
import { Button, Input, Select, message } from "antd";
import axios from "axios";
import { BsArrowRight } from "react-icons/bs";

const Settings = () => {
  const [roleData, setRoleData] = useState("");
  const [departData, setDepartData] = useState("");
  const [titleData, setTitleData] = useState("");
  const [desigData, setDesigData] = useState("");
  const [empData, setEmpData] = useState("");
  const [genData, setGenData] = useState("");

  const [roleName, setRoleName] = useState("");
  const [roleStatus, setRoleStatus] = useState("");

  const [departmentName, setDepartmentName] = useState("");
  const [departmentStatus, setDepartmentStatus] = useState("");

  const [titleName, setTitleName] = useState("");
  const [titleStatus, setTitleStatus] = useState("");

  const [desigName, setDesigName] = useState("");
  const [desigStatus, setDesigStatus] = useState("");

  const [empName, setEmpName] = useState("");
  const [empStatus, setEmpStatus] = useState("");

  const [genName, setGenName] = useState("");
  const [genStatus, setGenStatus] = useState("");

  const Swal = require("sweetalert2");

  const roleRequest = async () => {
    try {
      const data = {
        role_name: roleName,
        status: roleStatus,
      };
      const config = {
        method: "POST",
        url: `http://172.17.18.255:8080/dvp_app/roles/`,
        data,
      };

      const roleData = await axios(config);

      Swal.fire({
        icon: "success",
        title: `Role ${roleData?.data?.role_name} added successfully`,
        showConfirmButton: false,
        timer: 3000,
      });
      getRole();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.response?.data?.message[0]}`,
      });
      console.error(error);
    }
  };
  const departmentRequest = async () => {
    try {
      const data = {
        dept_name: departmentName,
        dept_status: departmentStatus,
      };
      const config = {
        method: "POST",
        url: `http://172.17.18.255:8080/dvp_app/departments/`,
        data,
      };

      const departmentData = await axios(config);

      Swal.fire({
        icon: "success",
        title: `Department ${departmentData?.data?.dept_name} added successfully`,
        showConfirmButton: false,
        timer: 3000,
      });
      getDepart();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.response?.data?.message[0]}`,
      });
      console.error(error);
    }
  };
  const titleRequest = async () => {
    try {
      const data = {
        title_name: titleName,
        title_status: titleStatus,
      };
      const config = {
        method: "POST",
        url: `http://172.17.18.255:8080/dvp_app/title/`,
        data,
      };

      const titleData = await axios(config);

      Swal.fire({
        icon: "success",
        title: `Title ${titleData?.data?.title_name} added successfully`,
        showConfirmButton: false,
        timer: 3000,
      });
      getTitle();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.response?.data?.message[0]}`,
      });
      console.error(error);
    }
  };
  const desigRequest = async () => {
    try {
      const data = {
        desig_name: desigName,
        desig_status: desigStatus,
      };
      const config = {
        method: "POST",
        url: `http://172.17.18.255:8080/dvp_app/designation/`,
        data,
      };

      const desigData = await axios(config);

      Swal.fire({
        icon: "success",
        title: `Designation ${roleData?.data?.desig_name} added successfully`,
        showConfirmButton: false,
        timer: 3000,
      });
      getDesig();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.response?.data?.message[0]}`,
      });
      console.error(error);
    }
  };
  const empRequest = async () => {
    try {
      const data = {
        emp_type_name: empName,
        emp_type_status: empStatus,
      };
      const config = {
        method: "POST",
        url: `http://172.17.18.255:8080/dvp_app/employee_type/`,
        data,
      };

      const empData = await axios(config);

      Swal.fire({
        icon: "success",
        title: `Employee type ${empData?.data?.emp_type_name} added successfully`,
        showConfirmButton: false,
        timer: 3000,
      });
      getEmpType();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.response?.data?.message[0]}`,
      });
      console.error(error);
    }
  };
  const genderRequest = async () => {
    try {
      const data = {
        gender_name: genName,
        gender_status: genStatus,
      };
      const config = {
        method: "POST",
        url: `http://172.17.18.255:8080/dvp_app/genders/`,
        data,
      };

      const genData = await axios(config);

      Swal.fire({
        icon: "success",
        title: `Gender ${genData?.data?.gender_name} added successfully`,
        showConfirmButton: false,
        timer: 3000,
      });
      getGender();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.response?.data?.message[0]}`,
      });
      console.error(error);
    }
  };

  //   get role

  const getRole = async () => {
    const getRoleTable = await axios(
      `http://172.17.18.255:8080/dvp_app/roles/`
    );
    setRoleData(getRoleTable);

  };
  const getDepart = async () => {
    const getDepartTable = await axios(
      `http://172.17.18.255:8080/dvp_app/departments/`
    );
    setDepartData(getDepartTable);

  };
  const getTitle = async () => {
    const getTitleTable = await axios(
      `http://172.17.18.255:8080/dvp_app/title/`
    );
    setTitleData(getTitleTable);

  };
  const getDesig = async () => {
    const getDesigTable = await axios(
      `http://172.17.18.255:8080/dvp_app/designation/`
    );
    setDesigData(getDesigTable);

  };
  const getEmpType = async () => {
    const getEmpTable = await axios(
      `http://172.17.18.255:8080/dvp_app/employee_type/`
    );
    setEmpData(getEmpTable);

  };
  const getGender = async () => {
    const getGenderTable = await axios(
      `http://172.17.18.255:8080/dvp_app/genders/`
    );
    setGenData(getGenderTable);

  };

  useEffect(() => {
    getRole();
    getDepart();
    getTitle();
    getDesig();
    getEmpType();
    getGender();
  }, []);

  const handleRole = async (e) => {
    e.preventDefault();
    await roleRequest();
  };
  const handleDepartment = async (e) => {
    e.preventDefault();
    await departmentRequest();
  };
  const handleTitle = async (e) => {
    e.preventDefault();
    await titleRequest();
  };
  const handleDesig = async (e) => {
    e.preventDefault();
    await desigRequest();
  };
  const handleEmpType = async (e) => {
    e.preventDefault();
    await empRequest();
  };
  const handleGen = async (e) => {
    e.preventDefault();
    await genderRequest();
  };

  const handleEditRole = async (ro) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Role",
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Role Name" value="${
          ro.role_name
        }">
        <select id="swal-input2" class="swal2-input">
          <option value="active" ${
            ro.status === "active" ? "selected" : ""
          }>Active</option>
          <option value="inactive" ${
            ro.status === "inactive" ? "selected" : ""
          }>Inactive</option>
        </select>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          role_name: document.getElementById("swal-input1").value,
          status: document.getElementById("swal-input2").value,
        };
      },
    });

    if (formValues) {
      try {
        const config = {
          method: "PUT",
          url: `http://172.17.18.255:8080/dvp_app/roles/${ro.role_id}/`,
          data: formValues,
        };

        const response = await axios(config);
        Swal.fire({
          icon: "success",
          title: `Role ${response?.data?.role_name} updated successfully`,
          showConfirmButton: false,
          timer: 3000,
        });
        getRole(); // Refresh the role data after editing a role
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.response?.data?.message[0] || "An error occurred",
        });
        console.error(error);
      }
    }
  };

  const handleDeleteRole = async (role) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to delete role ${role.role_name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const config = {
          method: "DELETE",
          url: `http://172.17.18.255:8080/dvp_app/roles/${role.role_id}`,
        };

        await axios(config);
        Swal.fire({
          icon: "success",
          title: `Role ${role.role_name} deleted successfully`,
          showConfirmButton: false,
          timer: 3000,
        });
        getRole(); // Refresh the role data after deleting a role
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.response?.data?.message[0]}`,
        });
        console.error(error);
      }
    }
  };

  const handleDeleteDepartment = async (dept) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to delete department ${dept.dept_name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const config = {
          method: "DELETE",
          url: `http://172.17.18.255:8080/dvp_app/departments/${dept.dept_id}`,
        };

        await axios(config);
        Swal.fire({
          icon: "success",
          title: `Department ${dept.dept_name} deleted successfully`,
          showConfirmButton: false,
          timer: 3000,
        });
        getDepart(); // Refresh the role data after deleting a role
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.response?.data?.message[0]}`,
        });
        console.error(error);
      }
    }
  };

  const handleDeleteTitle = async (title) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to delete title ${title.title_name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const config = {
          method: "DELETE",
          url: `http://172.17.18.255:8080/dvp_app/title/${title.title_id}`,
        };

        await axios(config);
        Swal.fire({
          icon: "success",
          title: `Title ${title.title_name} deleted successfully`,
          showConfirmButton: false,
          timer: 3000,
        });
        getTitle(); // Refresh the role data after deleting a role
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.response?.data?.message[0]}`,
        });
        console.error(error);
      }
    }
  };

  const handleDeleteDesignation = async (desig) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to delete Designation ${desig.desig_name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const config = {
          method: "DELETE",
          url: `http://172.17.18.255:8080/dvp_app/designation/${desig.desig_id}`,
        };

        await axios(config);
        Swal.fire({
          icon: "success",
          title: `Designation ${desig.desig_name} deleted successfully`,
          showConfirmButton: false,
          timer: 3000,
        });
        getDesig(); // Refresh the role data after deleting a role
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.response?.data?.message[0]}`,
        });
        console.error(error);
      }
    }
  };

  const handleDeleteEmpType = async (emp) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to delete Employee Type ${emp.emp_type_name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const config = {
          method: "DELETE",
          url: `http://172.17.18.255:8080/dvp_app/employee_type/${emp.emp_type_id}`,
        };

        await axios(config);
        Swal.fire({
          icon: "success",
          title: `Employee Type ${emp.emp_type_name} deleted successfully`,
          showConfirmButton: false,
          timer: 3000,
        });
        getEmpType(); // Refresh the role data after deleting a role
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.response?.data?.message[0]}`,
        });
        console.error(error);
      }
    }
  };

  const handleDeleteGender = async (gen) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to delete Gender ${gen.gender_name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const config = {
          method: "DELETE",
          url: `http://172.17.18.255:8080/dvp_app/genders/${gen.gender_id}`,
        };

        await axios(config);
        Swal.fire({
          icon: "success",
          title: `Gender ${gen.gender_name} deleted successfully`,
          showConfirmButton: false,
          timer: 3000,
        });
        getGender(); // Refresh the role data after deleting a role
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.response?.data?.message[0]}`,
        });
        console.error(error);
      }
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ display: "flex" }} className="production">
        <div className="flex-container-wrapper">
          <div>
            <h1>Admin Settings</h1>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div
                style={{ width: "70vw" }}
                className="accordion"
                id="accordionExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      style={{ background: "#001529" }}
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div
                        style={{
                          width: "70vw",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ color: "white" }}> Role <BsArrowRight  /></div>

                        <div style={{ color: "white" }}>
                          Total Role {roleData?.data?.length}
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <form class="row g-3 needs-validation">
                        <div class="col-md-4">
                          <label for="validationCustom01" class="form-label">
                            Role Name
                          </label>
                          <input
                            value={roleName}
                            onChange={(e) => setRoleName(e.target.value)}
                            type="text"
                            class="form-control"
                            id="validationCustom01"
                            required
                            placeholder="Role Name"
                          />
                          <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-3">
                          <label for="validationCustom04" class="form-label">
                            State
                          </label>
                          <select
                            value={roleStatus}
                            onChange={(e) => setRoleStatus(e.target.value)}
                            class="form-select"
                            id="validationCustom04"
                            required
                            placeholder="Select Status"
                          >
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>

                        <div class="col-10">
                          <button
                            style={{ background: "#18123b" }}
                            onClick={handleRole}
                            class="btn btn-primary"
                            type="submit"
                          >
                            Add Role
                          </button>
                        </div>
                      </form>

                      <hr />
                      <strong>View Role</strong>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Role Name</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody
                          style={{ height: "300px", overflow: "auto" }}
                          className="table-group-divider"
                        >
                          {roleData &&
                            roleData?.data?.map((item, index) => (
                              <>
                                <tr key={item?.role_id}>
                                  <td>{index + 1}</td>
                                  <td>{item?.role_name}</td>
                                  <td>{item?.priority}</td>
                                  <td>{item?.status}</td>
                                  <td>
                                    <Button
                                      onClick={() => handleEditRole(item)}
                                    >
                                      Edit
                                    </Button>
                                    <Button
                                      danger
                                      onClick={() => handleDeleteRole(item)}
                                    >
                                      Delete
                                    </Button>
                                  </td>
                                </tr>
                              </>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      style={{ background: "#001529" }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div
                        style={{
                          width: "70vw",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ color: "white" }}>Department <BsArrowRight  /></div>
                        <div style={{ color: "white" }}>
                          Total Department {departData?.data?.length}
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>Add Department</strong>
                      <form class="row g-3 needs-validation">
                        <div class="col-md-4">
                          <label for="validationCustom01" class="form-label">
                            Department Name
                          </label>
                          <input
                            value={departmentName}
                            onChange={(e) => setDepartmentName(e.target.value)}
                            type="text"
                            class="form-control"
                            id="validationCustom01"
                            required
                            placeholder="Department Name"
                          />
                          <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-3">
                          <label for="validationCustom04" class="form-label">
                            Status
                          </label>
                          <select
                            value={departmentStatus}
                            onChange={(e) =>
                              setDepartmentStatus(e.target.value)
                            }
                            class="form-select"
                            id="validationCustom04"
                            required
                            placeholder="Select Status"
                          >
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>

                        <div class="col-10">
                          <button
                            style={{ background: "#18123b" }}
                            onClick={handleDepartment}
                            class="btn btn-primary"
                            type="submit"
                          >
                            Add Department
                          </button>
                        </div>
                      </form>
                      <hr />
                      <strong>View Department</strong>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Department Name</th>

                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody
                          style={{ height: "300px", overflow: "auto" }}
                          className="table-group-divider"
                        >
                          {departData &&
                            departData?.data?.map((item, index) => (
                              <>
                                <tr key={item?.dept_id}>
                                  <td>{index + 1}</td>
                                  <td>{item?.dept_name}</td>

                                  <td>{item?.dept_status}</td>
                                  <td>
                                    <Button>Edit</Button>{" "}
                                    <Button
                                      onClick={() =>
                                        handleDeleteDepartment(item)
                                      }
                                      danger
                                    >
                                      Delete
                                    </Button>
                                  </td>
                                </tr>
                              </>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      style={{ background: "#001529" }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <div
                        style={{
                          width: "70vw",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ color: "white" }}>Title <BsArrowRight  /></div>

                        <div style={{ color: "white" }}>
                          Total Title {titleData?.data?.length}
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>Add Title</strong>
                      <form class="row g-3 needs-validation">
                        <div class="col-md-4">
                          <label for="validationCustom01" class="form-label">
                            Title Name
                          </label>
                          <input
                            value={titleName}
                            onChange={(e) => setTitleName(e.target.value)}
                            type="text"
                            class="form-control"
                            id="validationCustom01"
                            required
                            placeholder="Title Name"
                          />
                          <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-3">
                          <label for="validationCustom04" class="form-label">
                            Status
                          </label>
                          <select
                            value={titleStatus}
                            onChange={(e) => setTitleStatus(e.target.value)}
                            class="form-select"
                            id="validationCustom04"
                            required
                            placeholder="Select Status"
                          >
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>

                        <div class="col-10">
                          <button
                            style={{ background: "#18123b" }}
                            onClick={handleTitle}
                            class="btn btn-primary"
                            type="submit"
                          >
                            Add Title
                          </button>
                        </div>
                      </form>
                      <hr />
                      <strong>View Title</strong>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Title Name</th>

                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody
                          style={{ height: "300px", overflow: "auto" }}
                          className="table-group-divider"
                        >
                          {titleData &&
                            titleData?.data?.map((item, index) => (
                              <>
                                <tr key={item?.title_id}>
                                  <td>{index + 1}</td>
                                  <td>{item?.title_name}</td>

                                  <td>{item?.title_status}</td>
                                  <td>
                                    <Button>Edit</Button>{" "}
                                    <Button
                                      onClick={() => handleDeleteTitle(item)}
                                      danger
                                    >
                                      Delete
                                    </Button>
                                  </td>
                                </tr>
                              </>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      style={{ background: "#001529" }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <div
                        style={{
                          width: "70vw",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ color: "white" }}>Designation <BsArrowRight  /></div>

                        <div style={{ color: "white" }}>
                          Total Designation {desigData?.data?.length}
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>Add Designation</strong>
                      <form class="row g-3 needs-validation">
                        <div class="col-md-4">
                          <label for="validationCustom01" class="form-label">
                            Designation Name
                          </label>
                          <input
                            value={desigName}
                            onChange={(e) => setDesigName(e.target.value)}
                            type="text"
                            class="form-control"
                            id="validationCustom01"
                            required
                            placeholder="Designation Name"
                          />
                          <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-3">
                          <label for="validationCustom04" class="form-label">
                            Status
                          </label>
                          <select
                            value={desigStatus}
                            onChange={(e) => setDesigStatus(e.target.value)}
                            class="form-select"
                            id="validationCustom04"
                            required
                            placeholder="Select Status"
                          >
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>

                        <div class="col-10">
                          <button
                            style={{ background: "#18123b" }}
                            onClick={handleDesig}
                            class="btn btn-primary"
                            type="submit"
                          >
                            Add Designation
                          </button>
                        </div>
                      </form>
                      <hr />
                      <strong>View Designation</strong>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Designation Name</th>

                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody
                          style={{ height: "300px", overflow: "auto" }}
                          className="table-group-divider"
                        >
                          {desigData &&
                            desigData?.data?.map((item, index) => (
                              <>
                                <tr key={item?.desig_id}>
                                  <td>{index + 1}</td>
                                  <td>{item?.desig_name}</td>

                                  <td>{item?.desig_status}</td>
                                  <td>
                                    <Button>Edit</Button>{" "}
                                    <Button
                                      onClick={() =>
                                        handleDeleteDesignation(item)
                                      }
                                      danger
                                    >
                                      Delete
                                    </Button>
                                  </td>
                                </tr>
                              </>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      style={{ background: "#001529" }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <div
                        style={{
                          width: "70vw",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ color: "white" }}>Employee Type <BsArrowRight  /></div>

                        <div style={{ color: "white" }}>
                          Total Employee Type {empData?.data?.length}
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>Employee Type</strong>
                      <form class="row g-3 needs-validation">
                        <div class="col-md-4">
                          <label for="validationCustom01" class="form-label">
                            Employee Type Name
                          </label>
                          <input
                            value={empName}
                            onChange={(e) => setEmpName(e.target.value)}
                            type="text"
                            class="form-control"
                            id="validationCustom01"
                            required
                            placeholder="Employee Type Name"
                          />
                          <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-3">
                          <label for="validationCustom04" class="form-label">
                            Status
                          </label>
                          <select
                            value={empStatus}
                            onChange={(e) => setEmpStatus(e.target.value)}
                            class="form-select"
                            id="validationCustom04"
                            required
                            placeholder="Select Status"
                          >
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>

                        <div class="col-10">
                          <button
                          style={{ background: "#18123b" }}
                            onClick={handleEmpType}
                            class="btn btn-primary"
                            type="submit"
                          >
                            Add Employee Type
                          </button>
                        </div>
                      </form>
                      <hr />
                      <strong>View Employee Type</strong>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Employee Type Name</th>

                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody
                          style={{ height: "300px", overflow: "auto" }}
                          className="table-group-divider"
                        >
                          {empData &&
                            empData?.data?.map((item, index) => (
                              <>
                                <tr key={item?.emp_type_id}>
                                  <td>{index + 1}</td>
                                  <td>{item?.emp_type_name}</td>

                                  <td>{item?.emp_type_status}</td>
                                  <td>
                                    <Button>Edit</Button>{" "}
                                    <Button
                                      onClick={() => handleDeleteEmpType(item)}
                                      danger
                                    >
                                      Delete
                                    </Button>
                                  </td>
                                </tr>
                              </>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      style={{ background: "#001529" }}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <div
                        style={{
                          width: "70vw",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ color: "white" }}>Gender <BsArrowRight  /></div>

                        <div style={{ color: "white" }}>
                          Total Gender {genData?.data?.length}
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>Add Gender</strong>
                      <form class="row g-3 needs-validation">
                        <div class="col-md-4">
                          <label for="validationCustom01" class="form-label">
                            Gender Name
                          </label>
                          <input
                            value={genName}
                            onChange={(e) => setGenName(e.target.value)}
                            type="text"
                            class="form-control"
                            id="validationCustom01"
                            required
                            placeholder="Gender Name"
                          />
                          <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-3">
                          <label for="validationCustom04" class="form-label">
                            Status
                          </label>
                          <select
                            value={genStatus}
                            onChange={(e) => setGenStatus(e.target.value)}
                            class="form-select"
                            id="validationCustom04"
                            required
                            placeholder="Select Status"
                          >
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>

                        <div class="col-10">
                          <button
                            style={{ background: "#18123b" }}
                            onClick={handleGen}
                            class="btn btn-primary"
                            type="submit"
                          >
                            Add Gender
                          </button>
                        </div>
                      </form>
                      <hr />
                      <strong>View Gender</strong>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Gender Name</th>

                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody
                          style={{ height: "300px", overflow: "auto" }}
                          className="table-group-divider"
                        >
                          {genData &&
                            genData?.data?.map((item, index) => (
                              <>
                                <tr key={item?.gender_id}>
                                  <td>{index + 1}</td>
                                  <td>{item?.gender_name}</td>

                                  <td>{item?.gender_status}</td>
                                  <td>
                                    <Button>Edit</Button>{" "}
                                    <Button
                                      onClick={() => handleDeleteGender(item)}
                                      danger
                                    >
                                      Delete
                                    </Button>
                                  </td>
                                </tr>
                              </>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
