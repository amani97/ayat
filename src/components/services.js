import React, { useEffect, useState } from "react";
import {
  deleteService,
  fetchServices,
  toggleExpand,
} from "../store/services-slice";
import { useDispatch, useSelector } from "react-redux";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import deleteIcon from "../assets/delete.svg";
import editIcon from "../assets/ic_edite.svg";
import { useNavigate } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const dispatch = useDispatch();
  const isExpanded = useSelector(
    (state) => state.services.expanded[service.id]
  );

  const handleToggleExpand = () => {
    dispatch(toggleExpand(service.id));
  };

  const navigate = useNavigate();

  const handleEditService = () => {
    navigate(`/services/edit/${service.id}`);
  };

  const handleDelete = () => {
    if (service.children.length > 0) {
      const confirmDelete = window.confirm(
        "This service has sub-services. Do you want to delete them as well?"
      );
      if (!confirmDelete) return;
    }
    dispatch(deleteService(service.id));
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 hover:bg-gray-50 border-b border-gray-200">
        <div className="flex items-center">
          {service.children.length > 0 && (
            <button onClick={handleToggleExpand} className="mr-2">
              {isExpanded ? (
                <ExpandLessIcon className="text-blue-500" />
              ) : (
                <ExpandMoreIcon />
              )}
            </button>
          )}

          <span className="text-sm sm:text-base md:text-lg">
            {service.name}
          </span>
        </div>
        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handleEditService}
            className="px-2 py-1 rounded hover:bg-gray-100"
          >
            <img src={editIcon} alt="edit" className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={handleDelete}
            className="text-gray-500 hover:text-red-600"
          >
            <img
              src={deleteIcon}
              alt="delete"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
        </div>
      </div>

      {/* Sub-services - Render recursively if expanded */}
      {isExpanded && service.children.length > 0 && (
        <div className="ml-4 bg-gray-100 sm:ml-6 md:ml-8 lg:ml-12">
          {service.children.map((childService) => (
            <ServiceItem key={childService.id} service={childService} />
          ))}
        </div>
      )}
    </div>
  );
};

const Services = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex-1 w-full ">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
        Services
      </h2>
      <div>
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
