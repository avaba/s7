import React from 'react';
import {IUser} from "../../../types/users";
import {Avatar, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import style from '../table.module.scss'
import ActionUserTable from "./ActionUserTable";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface IUsersTable {
    list: Array<IUser>;
    loading: boolean;
    error: string;
}

const UsersTable = ({list, loading, error}: IUsersTable) => {
    const {isAuth} = useTypedSelector(state => state.login)

    return (
        <Card>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow className={style.trow}>
                            <TableCell align={"left"}>Имя</TableCell>
                            <TableCell align={"left"}>Email</TableCell>
                            {isAuth && <TableCell align={"center"}>Действие</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map(item => (
                            <TableRow className={style.trow} key={item.id}>
                                <TableCell align={"left"}>
                                    <div className={style.name}>
                                        <Avatar src={item.avatar}/>
                                        <span className={style.name__text}>{item.first_name} {item.last_name}</span>
                                    </div>
                                </TableCell>
                                <TableCell align={"left"}>{item.email}</TableCell>
                                {isAuth && <TableCell align={"center"}>
                                    <ActionUserTable id={item.id}/>
                                </TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
};

export default UsersTable;