import { NavLink } from 'react-router-dom';

const TopNavi = () => {
    return (
        <div>
            <nav className="flex bg-gray-300 p-2 gap-5 h-20 items-center">
                <NavLink to="/use-state">useOptimistic</NavLink>
                <NavLink to="/use-action-state">useActionState</NavLink>
                <NavLink to="/use-form-status">useFormState</NavLink>
            </nav>
        </div>
    );
};

export default TopNavi;