import Head from "next/head";

function Layout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Your Website Title</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-vh-100">
        <div>
          {" "}
           <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default Layout;
