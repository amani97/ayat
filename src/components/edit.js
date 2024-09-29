import React, { useEffect, useState } from "react";
import {
  addSelectedServices,
  editService,
  fetchServices,
  resetSelection,
  toggleExpand,
  toggleSelect,
} from "../store/services-slice";
import { useDispatch, useSelector } from "react-redux";

import Delete from "../assets/close.svg";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Search from "../assets/search.svg";
import editIcon from "../assets/ic_edite.svg";

const ServiceItem = ({ service }) => {
  const dispatch = useDispatch();
  const isExpanded = useSelector(
    (state) => state.services.expanded[service.id]
  );
  const isSelected = useSelector(
    (state) => state.services.selected[service.id]
  );

  const [editMode, setEditMode] = useState(false);
  const [serviceName, setServiceName] = useState(service.name);
  const [propagateToChildren, setPropagateToChildren] = useState(false);

  const handleToggleExpand = () => {
    dispatch(toggleExpand(service.id));
  };

  const handleSelect = () => {
    dispatch(toggleSelect(service.id));
  };
  const handleLinkServices = () => {
    dispatch(addSelectedServices());
    dispatch(resetSelection()); // Optionally reset after linking
  };
  const handleEditService = () => {
    dispatch(
      editService({
        id: service.id,
        updatedService: { name: serviceName },
        propagateToChildren,
      })
    );
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Add New Services</h2>
          </div>
          <div className="flex justify-between">
            <div className="relative  w-1/3 py-1">
              <input
                type="text"
                placeholder="Add New Services"
                className="w-full border rounded-2xl px-4 py-2"
              />
              <button className="absolute h-1/2 right-3 top-3 text-gray-500">
                <img src={Search} />
              </button>
            </div>
            <div className="flex justify-between">
              <img className="mr-6" src={Delete} />

              <button
                onClick={handleLinkServices}
                className="bg-blue-500 text-white px-4 w-32 rounded-l-full"
              >
                Link
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="flex justify-between items-center p-4 hover:bg-gray-50 border-b border-gray-200">
        <div className="flex items-center">
          {service.children.length > 0 && (
            <button onClick={handleToggleExpand} className="mr-2">
              {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </button>
          )}
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleSelect}
            className="mr-2 border-blue-200 shadow-md"
          />
          {editMode ? (
            <input
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              className="border rounded p-1"
            />
          ) : (
            <span>{service.name}</span>
          )}
        </div>
        {/* Action Buttons */}
        <div className="flex space-x-2">
          {editMode ? (
            <div>
              <label className="mr-4">
                <input
                  type="checkbox"
                  checked={propagateToChildren}
                  onChange={() => setPropagateToChildren(!propagateToChildren)}
                  className="mr-2"
                />
                Propagate to children
              </label>
              <button
                onClick={handleEditService}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Save
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className=" px-2 py-1 rounded"
            >
              <img src={editIcon} alt="edit" />
            </button>
          )}
        </div>
      </div>

      {/* Sub-services - Render recursively if expanded */}
      {isExpanded && service.children.length > 0 && (
        <div className="ml-4 bg-gray-100">
          {service.children.map((childService) => (
            <ServiceItem
              className="bg-blue-100"
              key={childService.id}
              service={childService}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const EditServices = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
  return (
    <div className="bg-white rounded-lg shadow-lg pl-6 py-6 w-3/4">
      <h2 className="text-lg font-semibold mb-4">Services</h2>
      <div className="">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default EditServices;
