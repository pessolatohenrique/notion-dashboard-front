import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

import { THEME_COLOR } from "../../constants/default_settings";
import { REQUIRED_MESSAGE } from "../../constants/messages";
import BreadcrumbsWrapper from "../../components/BreadcrumbsWrapper";
import { IExampleForm } from "../../interfaces/FormData";
import { IBook, IBookList } from "../../interfaces/Book";

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
    createData({
      book: "Harry Potter e o Enigma do Príncipe",
      author: "J.K Rowling",
      pages: 220,
      genre: "Trilogia",
    }),
  ],
};

function ExampleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IExampleForm>();
  const [books, setBooks] = useState<IBookList>({ items: [] });

  const onSubmit = (data: IExampleForm) => console.log(data);

  const watchAuthor = watch("author");

  useEffect(() => {
    async function searchCep() {
      const cep = await axios.get(
        `https://viacep.com.br/ws/${process.env.REACT_APP_CEP_EXAMPLE}/json/`
      );
      console.log("cep example", cep);
    }

    searchCep();

    const author = watch("author");
    const books = [...rows.items].filter((item) => item.author === author);
    setBooks({ items: books });
  }, [watchAuthor]);

  return (
    <>
      <Container fixed>
        <br />
        <Card>
          <CardContent>
            <BreadcrumbsWrapper
              parentLink={{ link: "/livros", label: "Livros" }}
              childrenLabel="Novo"
            />
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              color={THEME_COLOR}
            >
              Novo Livro
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container direction={"column"} spacing={2}>
                <Grid item>
                  <TextField
                    fullWidth
                    id="firstName"
                    label="First Name"
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName && REQUIRED_MESSAGE}
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    id="lastName"
                    label="Lastname Name"
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName && REQUIRED_MESSAGE}
                    {...register("lastName", { required: true, maxLength: 20 })}
                  />
                </Grid>
                <Grid item>
                  <FormControl fullWidth>
                    <InputLabel id="author">Author</InputLabel>

                    <Select
                      labelId="author"
                      id="demo-simple-select-helper"
                      fullWidth
                      inputProps={{ "data-testid": "author" }}
                      error={Boolean(errors.author)}
                      {...register("author", {
                        required: true,
                      })}
                    >
                      <MenuItem value={"J.K Rowling"}>JK Rowling</MenuItem>
                      <MenuItem value={"Cortella"}>Cortella</MenuItem>
                      <MenuItem value={"Nathalia Arcuri"}>
                        Nathalia Arcuri
                      </MenuItem>
                    </Select>
                    {errors.author && (
                      <FormHelperText error>{REQUIRED_MESSAGE}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl fullWidth>
                    <InputLabel id="book">Book</InputLabel>

                    <Select
                      labelId="book"
                      id="book"
                      fullWidth
                      inputProps={{ "data-testid": "book" }}
                      error={Boolean(errors.book)}
                      {...register("book", {
                        required: true,
                      })}
                    >
                      {books.items.map((item) => {
                        return (
                          <MenuItem key={item.book} value={item.book}>
                            {item.book}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    {errors.book && (
                      <FormHelperText error>{REQUIRED_MESSAGE}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch defaultChecked {...register("active")} />
                      }
                      label="Ativo?"
                    />
                  </FormGroup>
                </Grid>
                <Grid item>
                  <Button variant="contained" type="submit">
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
export default ExampleForm;
