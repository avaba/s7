import React, {useState} from 'react';
import {MenuItem} from "@mui/material";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ActionMenuButton from "../../UI/ActionMenuButton";
import {useRouter} from "next/router";
import {RoutePath} from "../../../types/route";
import DeleteIcon from '@mui/icons-material/Delete';
import api from "../../../api/api";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface IActionUserTable {
    id: number
}

const ActionUserTable = ({id}: IActionUserTable) => {
    const router = useRouter()
    const {users, error, isLoading} = useTypedSelector(state => state.users)
    const {fetchUsers} = useActions()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMore = (event: React.MouseEvent<HTMLElement>) => {
        handleClose()
        router.push(`${RoutePath.users}/${id}`)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ActionMenuButton anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
            <MenuItem onClick={handleMore}><ReadMoreIcon/> Подробнее</MenuItem>
        </ActionMenuButton>
    );
};

export default ActionUserTable;