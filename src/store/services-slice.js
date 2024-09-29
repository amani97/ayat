// servicesSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Mock data for services
const mockServices = [
  {
    id: 1,
    name: "Service A",
    children: [
      {
        id: 2,
        name: "Sub-service A1",
        children: [
          { id: 3, name: "Sub-service A1.1", children: [] },
          { id: 4, name: "Sub-service A1.2", children: [] },
        ],
      },
      {
        id: 5,
        name: "Sub-service A2",
        children: [],
      },
    ],
  },
  {
    id: 6,
    name: "Service B",
    children: [
      {
        id: 7,
        name: "Sub-service B1",
        children: [],
      },
    ],
  },
];

// const propagateSelection = (service, isSelected) => {
//   service.children.forEach((child) => {
//     service.selected = isSelected;
//     if (child.children.length > 0) {
//       propagateSelection(child, isSelected);
//     }
//   });
// };

const propagateChangesToChildren = (children, updatedService) => {
  children.forEach((child) => {
    child.name = `${updatedService.name} - Child`;
    if (child.children.length > 0) {
      propagateChangesToChildren(child.children, updatedService);
    }
  });
};

// Create slice for services
const servicesSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    expanded: {},
    selected: {},
  },

  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
    toggleExpand: (state, action) => {
      const id = action.payload;
      state.expanded[id] = !state.expanded[id];
    },
    toggleSelect: (state, action) => {
      const { id, isSelected } = action.payload;

      const selectServiceById = (services) => {
        services.forEach((service) => {
          if (service.id === id) {
            service.selected = isSelected;
            // Automatically select/deselect all child services
            propagateChangesToChildren(service, isSelected);
          } else if (service.children.length > 0) {
            selectServiceById(service.children);
          }
        });
      };

      selectServiceById(state.services);
    },
    editService: (state, action) => {
      const { id, updatedService, propagateToChildren } = action.payload;

      const editServiceById = (services) => {
        services.forEach((service) => {
          if (service.id === id) {
            service.name = updatedService.name;

            // If propagate to children is true, update all child services
            if (propagateToChildren && service.children.length > 0) {
              propagateChangesToChildren(service.children, updatedService);
            }
          } else if (service.children.length > 0) {
            editServiceById(service.children); // Recursively apply changes
          }
        });
      };
      editServiceById(state.services);
    },
    deleteService: (state, action) => {
      const id = action.payload;

      // Recursive function to remove service by ID
      const removeServiceById = (services) => {
        return services.filter((service) => {
          if (service.children && service.children.length > 0) {
            service.children = removeServiceById(service.children);
          }
          return service.id !== id;
        });
      };

      state.services = removeServiceById(state.services);
    },

    addSelectedServices: (state) => {
      const collectSelectedServices = (services, selectedServices = []) => {
        services.forEach((service) => {
          if (service.selected) {
            selectedServices.push(service);
          }
          if (service.children.length > 0) {
            collectSelectedServices(service.children, selectedServices);
          }
        });
        return selectedServices;
      };

      const selectedServices = collectSelectedServices(state.services);
      state.selectedServices = selectedServices;
    },
    resetSelection: (state) => {
      const resetSelection = (services) => {
        services.forEach((service) => {
          service.selected = false;
          if (service.children.length > 0) {
            resetSelection(service.children);
          }
        });
      };
      resetSelection(state.services);
    },
  },
});

export const {
  setServices,
  toggleExpand,
  toggleSelect,
  deleteService,
  editService,
  addSelectedServices,
  resetSelection,
} = servicesSlice.actions;

export const fetchServices = () => (dispatch) => {
  // Simulating an API call with mock data
  setTimeout(() => {
    dispatch(setServices(mockServices));
  }, 1000);
};

export default servicesSlice.reducer;
