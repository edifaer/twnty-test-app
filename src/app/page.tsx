'use client'

import Link from "next/link";
import {Container, LinkButton} from "./page.styles";

export default function Home() {
    return (
        <Container>
            <h1>{'{JSON}'} Placeholder</h1>
            <Link href='/summary'>
                <LinkButton>
                    Go to the Summary Page
                </LinkButton>
            </Link>
        </Container>
    )
}
