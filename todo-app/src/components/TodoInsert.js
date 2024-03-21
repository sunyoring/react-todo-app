import {MdAdd} from 'react-icons/md';
import '../styles/TodoInsert.scss'

const TodoInsert = () => {
    return (
        <form className='TodoInsert'>
            <input placeholder='할 일을 입력하세요'></input>
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;