import React, {useState} from 'react'

import DynamoDB from '../../providers/aws'

import styles from './Content.module.css'

import Text from '../Text'
import Button from '../Button'
import {LinkWrapper} from '../Anchors'
import {Table, TableRow, TableHead, TableHeadItem, TableBody, TableBodyItem} from '../Table'

function NoData() {
    return (
        <Text>Não há nenhuma tabela ainda! Comece adicionando uma clicando aqui :-)</Text>
    )
}

export default function Content() {
    let [tables, setTables] = useState(null)

    const getTables = async () => {
        await DynamoDB.listTables({}, function (err, response) {
            if (err) {
                console.error(err.stack)
            } else {
                setTables(response.TableNames)
            }
        })
    }

    return (
        <div className={styles.content}>
            <div className={styles.titleContainer}>
                <Text strong size='big'>TABELAS</Text>
                <Button onClick={getTables} layout='primary'>Atualizar</Button>
            </div>
            <Table hasData={!!tables} placeholder={<NoData />}>
                <TableHead>
                    <TableRow>
                        <TableHeadItem>Nome</TableHeadItem>
                        <TableHeadItem className={styles.tableOperations}></TableHeadItem>
                    </TableRow>
                    </TableHead>
                <TableBody>
                    {tables && tables.map(el =>
                        <TableRow key={el}>
                            <TableBodyItem>
                                <LinkWrapper href={`/tables/${el}`}>{el}</LinkWrapper>
                            </TableBodyItem>
                            <TableBodyItem className={styles.tableOperations}>
                                <Button onClick={() => ''} size='small' layout='danger'>Excluir</Button>
                            </TableBodyItem>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}