<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Content from "$lib/Content.svelte";
    import CheckMark from "$lib/checkMark.svg";
    import FailMark from "$lib/failMark.svg";

    let success: boolean = false;
    let failed: boolean = false;

    async function onSubmit(e: SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        let data: any = {};

        data = Object.fromEntries(formData.entries())

        console.log(data);

        const res = await fetch(`/api/contact`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(res => res.json());

        // this isn't the best way of doing this
        console.log(res)
        if (res.status == 200) {
            success = true;
        } 
        else if (res.status == 503) {
            failed = true;
        }
    }
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
            <!-- this isn't the best way at determining update success-->
            {#if success}
                <div class="submit-modal">
                    <span>CONTACT DETAILS RECORDED.<br>I'LL GET BACK TO YOU SOON.</span>
                    <img class="icon" src={CheckMark} alt="I couldn't load this :( Just imagine a checkmark"/>
                </div>
            {:else if failed}
                <div class="submit-modal">
                    <span>UNABLE TO UPDATE DATABASE.<br>TRY AGAIN SOON.</span>
                    <img class="icon" src={FailMark} alt="I couldn't load this :( Just imagine an X"/>
                </div>
            {:else}
                <div class="notes">
                    PLACEHOLDER TEXT FOR NOTES ABOUT CONTACTING.
                </div>  
                <form on:submit|preventDefault={onSubmit}>
                    <input class="email" type="email" name="email" placeholder="CONTACT EMAIL" required><br>
                    <input class="subject" type="text" name="subject" placeholder="SUBJECT... " required><br>
                    <textarea class="message" name="message" placeholder="MESSAGE..." required></textarea><br>
                    <input type="submit" value="SUBMIT">
                </form>
            {/if}
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

    .icon {
        margin-top: 18px;
        height: 104px;
        width: 104px;
        align-self: center;
    }

    .submit-modal {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        font-size: 32px;
        text-align: center;
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