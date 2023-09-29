import {Character} from './model.tsx';

export default function CharacterCard (props: {character: Character}) {

    return (
        <section>
            <h2>{props.character.name}</h2>
            <ul>
                <li>Status: {props.character.status}</li>
                <li>Species: {props.character.species}</li>
            </ul>
        </section>
    )
}