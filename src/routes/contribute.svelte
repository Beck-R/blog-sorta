<script lang="ts">
    import Header from "../lib/Header.svelte";
    import Content from "../lib/Content.svelte";
</script>
  
<svelte:head>
    <link rel="stylesheet" href="../app.css">
    <title>Contribute</title>
</svelte:head>
<body>
    <div class="box">
        <div class="row header">
          <Header />
        </div>
        <div class="row content">
          <Content>
            <div class="notes">
                IF FOR WHATEVER REASON YOU WANT TO CONTRIBUTE TO THIS WEBSITE, PLEASE FILL OUT THE FORM BELOW.<br>
                I WILL GET BACK TO YOU TO DISCUSS YOUR ARTICLE/FEATURE IDEA.<br>
                I WILL MOST LIKELY BE ABLE TO PUBLISH YOUR ARTICLE OR IMPLEMENT YOUR FEATURE, AS LONG AS IT'S NOT
                DUMB OR ILLEGAL.<br>
                YOU MAY DECIDE IF YOU'D LIKE TO BE CREDITED OR ANONYMOUS.
            </div>
            <form>
                <input class="email" type="email" name="email" placeholder="CONTACT EMAIL" required><br>
                <input class="subject" type="text" name="subject" placeholder="SUBJECT... " required><br>
                <textarea class="message" name="message" placeholder="MESSAGE..." required></textarea><br>
                <input type="submit" value="SUBMIT">
            </form>
          </Content>
        </div>
    </div>
</body>

<style>
    .notes {
        height: auto !important;
        width: 50% !important;
        background-color: #ffffff;
        border: 2px solid #000000;
        padding: 20px;
        font-size: 18px;
        margin-top: 20px;
    }

    form {
        width: 50% !important;
        margin: auto !important;
        margin-top: 20px !important;
    }

    input:focus {
        outline: none;
        border: 2px solid #22d3ee;
    }

    textarea:focus {
        outline: none;
        border: 2px solid #22d3ee;
    }

    input, textarea {
        background-color: #ffffff;
        border: 2px solid #000000;
        padding: 10px 20px;
        font-size: 18px;
        margin: 20px 0px 20px 0px;
    }

    .email {
        width: 50%;
    }

    .subject {
        width: 75%;
    }

    .message {
        width: 100%;
    }
</style>