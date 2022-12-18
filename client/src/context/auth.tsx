import { createContext } from "react"
import { User } from "../types"

interface State {
    authtentificated: Boolean
    user: User | undefined
    loading: Boolean
}

const StateContext = createContext<State>({
    authtentificated: false,
    user: undefined,
    loading: true
})

const DispatchContext = createContext<any>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                { children }
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}