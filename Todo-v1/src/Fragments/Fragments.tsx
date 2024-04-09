import React, { useState } from "react";
import Items from "./components/Items";
import { ErrorMessage } from "./components/ErrorMessage";
import { Container } from "./components/Container";
import SubjectSearch from "./components/SubjectSearch";
import { act } from "react-dom/test-utils";

export const FragmentsApp = () => {

    let headings = [{ heading: 'React', description: 'This is react turtorial', stock: 14 },
    { heading: 'DOM', description: 'This is DOM turtorial', stock: 10 },
    { heading: 'DNS', description: 'This is DNS turtorial', stock: 11 }
    ]
    let actual = [...headings];

    // let stateArr = useState(headings);
    // headings = stateArr[0];
    // let setState = stateArr[1];
    let [list, setState] = useState(headings);
    let [updateList, setUpdate] = useState(actual);
    headings = list;
    console.log(headings);

    let show = headings.length == 0;

    function search(item: any) {
        let searching = item.target.value.toLowerCase();
        if (item.target.value == '') {
            headings = updateList;
        } else

            headings = updateList.filter(f => f.heading.toLowerCase().includes(searching) || f.description.toLowerCase().includes(searching));
        console.log(item.target.value);
        setState(headings);

    }

    return (<>

        <Container>
            <h1>Courses </h1>
            <SubjectSearch search={search} ></SubjectSearch>
            <ErrorMessage show={show}></ErrorMessage>
            <Items subjectList={headings} updateStock={update}></Items>
        </Container>
        <Container>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatum praesentium velit temporibus numquam modi cupiditate nisi iste consequuntur rem quasi obcaecati sed id, non delectus dolorum laborum. Natus, omnis!    </p>
        </Container>
    </>
    )

    function update(name: any) {
        console.log(name);

        updateList = updateList.filter(f => {
            if (f.heading == name && f.stock > 0)
                f.stock = f.stock - 1;
            return true;
        })
        actual = updateList
        setUpdate(actual)

        // headings = headings.filter(f => {
        //     if (f.heading == name && f.stock > 0)
        //         f.stock = f.stock - 1;
        //     return true;
        // })
        // // headings = [..updateList];
        // // headings = actual;
        // setState(headings)
    }
}

