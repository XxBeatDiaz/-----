import { getUserByLogin } from "../services/users.service.js";

export function getUser(req, res) {
    const { username, password } = req.query
    console.log(username, password);
    
    try {
        const user = getUserByLogin(username, password);
        
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' })
    }
}