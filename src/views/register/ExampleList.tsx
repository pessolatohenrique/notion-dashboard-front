import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { StyledTableCell } from "../../constants/CustomStyles";
import { THEME_COLOR } from "../../constants/default_settings";
import BreadcrumbsWrapper from "../../components/BreadcrumbsWrapper";
import ViewListToggle from "../../components/ViewListToggle";
import { IBook, IBookList } from "../../interfaces/Book";
import useView from "../../hooks/useView";

function createData({ book, author, pages, genre }: IBook) {
  return { book, author, pages, genre };
}

const rows: IBookList = {
  items: [
    createData({
      book: "Jogos Vorazes",
      author: "Suzanne Collins",
      pages: 320,
      genre: "Trilogia",
    }),
    createData({
      book: "Harry Potter e a Pedra Filosofal",
      author: "J.K Rowling",
      pages: 220,
      genre: "Trilogia",
    }),
    createData({
      book: "Me poupe!",
      author: "Nathalia Arcuri",
      pages: 200,
      genre: "Finanças",
    }),
    createData({
      book: "Sherlock Homes",
      author: "Arthur Conan Doyle",
      pages: 500,
      genre: "Suspense",
    }),
    createData({
      book: "O mistério dos sete relógios",
      author: "Agatha Christie",
      pages: 300,
      genre: "Suspense",
    }),
  ],
};

function ExampleList() {
  const [isTable, isList, switchFormat] = useView();

  return (
    <>
      <Container fixed>
        <br />
        <Card>
          <CardContent>
            <BreadcrumbsWrapper childrenLabel="Livros" />
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              color={THEME_COLOR}
            >
              Livros
            </Typography>

            <ViewListToggle
              isTable={isTable}
              isList={isList}
              switchFormat={switchFormat}
            />

            {isTable() && (
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Título</StyledTableCell>
                      <StyledTableCell>Autor</StyledTableCell>
                      <StyledTableCell>Gênero</StyledTableCell>
                      <StyledTableCell>Páginas</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.items.map((row: IBook) => {
                      return (
                        <TableRow key={row.book}>
                          <TableCell>{row.book}</TableCell>
                          <TableCell>{row.author}</TableCell>
                          <TableCell>{row.genre}</TableCell>
                          <TableCell>{row.pages}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            )}

            {isList() && (
              <Grid container spacing={2}>
                {rows.items.map((row: IBook) => {
                  return (
                    <Grid item xs={4} key={row.book}>
                      <Card>
                        <CardContent>
                          <Typography
                            variant="h6"
                            component="div"
                            color="text.secondary"
                          >
                            {row.book}
                          </Typography>
                          <Typography variant="body2">
                            <>
                              <ListItem>
                                <ListItemText disableTypography>
                                  {row.author}
                                </ListItemText>
                              </ListItem>
                              <ListItem>
                                <ListItemText disableTypography>
                                  {row.genre}
                                </ListItemText>
                              </ListItem>
                              <ListItem>
                                <ListItemText disableTypography>
                                  {row.pages}
                                </ListItemText>
                              </ListItem>
                            </>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </CardContent>
          <CardActions>
            <Button size="small" href="/autores/novo">
              Adicionar
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}

export default ExampleList;
