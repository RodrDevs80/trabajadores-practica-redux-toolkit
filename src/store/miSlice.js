import { createSlice } from "@reduxjs/toolkit";

export const miSlice = createSlice({
    name: "misTrabajadores",
    initialState: {
        trabajadores: [],
    },
    reducers: {
        agregarUnValor: (state, action) => {
            state.trabajadores.push(action.payload);
            //state.trabajadores=[...state.trabajadores.action.payload];
        },
        modificarUnValor: (state, action) => {
            const { indice, nuevoContinente } = action.payload;
            state.trabajadores[indice].departamento = nuevoContinente;
        },
        eliminarUnValor: (state, action) => {
            state.trabajadores = [...state.trabajadores.filter((trabajador, i) => i !== action.payload)]
        }
    }
})
export const departamentosSlice = createSlice({
    name: "misDepartamentos",
    initialState: {
        departamentos: ["Africa (Ventas)", "America (Organización)", "America (Comercial)", "Asia (Ventas)", "Asia (Organización)", "Europa (Ventas)", "Europa (Comercial)", "Europa (Organización)"],
    },
    reducers: {

    }
})
export const { agregarUnValor } = miSlice.actions;
export const { modificarUnValor } = miSlice.actions;
export const { eliminarUnValor } = miSlice.actions;