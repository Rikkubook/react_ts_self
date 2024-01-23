import Header from "@/components/Header";

// import "./style.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      example: "",
      exampleRequired: "",
    },
  });

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <>
      <Header />
    </>
  );
}

export default App;
