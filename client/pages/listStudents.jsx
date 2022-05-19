import {useLoading} from "../useLoading";
import {fetchJSON} from "../fetchJSON";

function StudentList({ student: { name, study, subjects } }) {
    return (
        <>
            <h2>Name: {name}</h2>
            <h3>Study: {study}</h3>
            <h3>Subjects: {subjects}</h3>

        </>
    );
}

export function ListStudents() {
    const {loading, error, data} = useLoading(async () =>
        fetchJSON("/api/students")
    );

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <div>{error.toString()}</div>
            </div>
        );
    }

    return (
        <div>
            <h1>List of students</h1>

            {data.map((student) => (
                <StudentList key={student.name} student={student}/>
            ))}
        </div>
    );
}