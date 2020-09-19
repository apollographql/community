---
title: Apollo Content Style Guide
---

> Hello! This is Apollo's company style guide. We've published it here to assist with contributions from community members. You're also welcome to borrow from it if you're creating a similar resource for your organization.

This guide defines style conventions for public-facing written content produced by Apollo. **It is neither comprehensive nor final.** Your feedback and contributions help us address as much of our writing surface area as possible.

## All content types

This section describes conventions that are applicable to all types of content (exceptions are indicated).

### Voice

The Apollo voice is:

* Approachable 😃
* Positive 👍
* Encouraging 💪
* Helpful 🙏

The Apollo voice is **not**:

* Sarcastic 🙄
* Condescending 🧐
* Robotic 🤖
* Exaggerated 🤪

When comparing Apollo/GraphQL to an alternative, emphasize the advantages of Apollo/GraphQL much more than the disadvantages of the alternative.

Use "low-intensity" language to describe adopting and using Apollo products and features:

* **✅ Low-intensity**: "adopt", "move", "use", "enable"
* **❌ High-intensity**: "migrate", "transition", "utilize", "leverage"

When describing ease of use, encourage without condescending:

* **✅ Encouraging 💪:** "Apollo Configu-tron helps you define your server’s initial configuration."
* **❌ Condescending 🧐:** "Apollo Configu-tron makes server configuration trivial."

Relatedly, outside of marketing content, avoid using phrases like "simply" or "as easy as" when describing how to perform a task. Consider this matrix:

|   | Reader succeeds  | Reader fails |
|---|---|---|
| **Text omits "simply"**   | Reader is happy 🙂  | Reader is frustrated 😕 |
| **Text includes "simply"**  | Reader is happy 🙂  | Reader is frustrated AND insulted 😡  |


When in doubt, think of communicating with our developers as communicating with coworkers you haven’t met yet. Many of them are!

### Framing

Whenever applicable, frame your content relative to the reader ("you/your", "your team/organization", "your users/customers"). This includes the imperative ("Log in to Studio", "Sign up for free", and so on).

You can use "we" to refer to Apollo in most forms of content (**except reference documentation**), as long as it's clear from context that "we" refers to Apollo. When in doubt, err on the side of using "Apollo" instead.

When comparing Apollo or GraphQL to another technology, remember that the Apollo voice is positive. Avoid being overly critical or dismissive of alternatives. Instead, explain the capabilities of our technology and allow the reader to reach their own conclusion.

## Structural elements

### Headings

Organize larger pieces of content with headings and subheadings.

Use title casing for the title of a document. Use sentence casing for all other headings.

Unless there’s a compelling reason to deviate within a piece of content, all "sibling" headings should follow a similar titling strategy. For example, all of the headings in this document are short, simple noun phrases. A hypothetical "How-to" article’s headings might instead include "Connecting to the server", "Executing jobs", and "Terminating a session".

**When writing documentation**, default to using the phrase type that matches the type of document you’re writing, according to the following:

| Document type | Phrase type  | Examples |
|---|---|---|
| Conceptual overview | Gerund  | "Connecting to the server", "Executing jobs" |
| Tutorial  | Imperative (optionally with an ordinal) | "3. Build a paginated list", "Update data with `useMutation`"  |
| Reference (API and otherwise) | Noun or symbol (usually the name of a class, function, or other Apollo-specific term) | "Constructor", "`useQuery`" |

**When writing blog posts**, your headings can be more "flavorful" to match the conversational medium, and the "phrase type" has more room for variation. However, a given post’s headings should be internally consistent to provide a scanable outline of the subject matter. Flavor should never get in the way of comprehension. If it feels appropriate to include emoji in a blog post heading, include them at the end (and exercise moderation).


### Lists

Use an **unordered list** to enumerate short, related items that don’t have multiple fields. When items do have multiple fields, instead use a [table](#tables). When individual items are long, consider using standard paragraphs.

Use an **ordered list** _only_ when you are listing a sequence of steps for the reader to perform, such as in a tutorial.

Use the following conventions when creating a list:

* Introduce the list with a sentence or fragment that ends in a colon.
    * The sentence should not specify how many items are in the list (the number might change multiple times in a day).
* Keep list items short to improve scanability.
* Use structurally similar phrases or clauses for each list item.
* Use sub-items to clarify more complex list items.
    * Use sub-items sparingly.
* Include ending punctuation only in list items that are complete sentences.
* If a list exceeds 6 items, consider splitting it into two or more lists.

**When writing conversational prose (such as a blog post)**, limit your total use of lists. Although one list can be useful for summarizing and improving scanability, multiple can detract from the content’s conversational tone.

**When writing conceptual documentation**, use a list when you enumerate any set that includes at least three items (such as the possible values of an enum).

### Tables

Use a table to enumerate related items that have multiple fields. Enumerating function parameters and object fields are extremely common use cases for tables:

| Name | Type | Description |
|---|---|---|
| `id`| `String` | The widget's globally unique identifier. This value is immutable. |
| `name` | `String` | The widget's user-specified name. |

### Code blocks

The following types of content should **always** go in a code block:

* Example code
    *  Whenever possible, specify the example’s programming language to enable any applicable syntax highlighting.
* Terminal commands that are longer than three words
    * You can include one- to three-word commands in a sentence using code font ("Run `npm start`").
* Example terminal and logging output


### Images

Although it’s rarely a requirement, including a relevant image or two in a piece of content can significantly improve the "shape" of the content and make it feel more accessible.

Most images in Apollo content are one of the following:

* Logos and other polished branding images
* Diagrams
* Screenshots of UI

#### Screenshot guidelines

* **Use screenshots sparingly.** UI is much more prone to frequent change than a conceptual diagram, and replacing outdated screenshots is just annoying enough that it often falls by the wayside.
* Include only as much of the UI as is necessary to convey the relative location of whatever you’re showing. 
    * For example, don’t present a screenshot of the entire Apollo Studio UI to point out the **New Graph** button in the upper-right.
* Don’t include irrelevant or potentially confidential information, such as your browser tabs.
* Before taking a screenshot, condense the UI as much as you can without cluttering:

### Text formatting

#### Links

Avoid using "here", "this page", or a similarly vague phrase as the display text for a link. Instead, use a rich noun or verb phrase that strongly suggests the nature of the content on the linked page. If the linked page has a title, that’s often your best bet.

When it doesn’t complicate your sentence structure, a link should appear at the end of a sentence:

* ❌ "See [this page](https://www.apollographql.com/pricing/) for pricing details."
* ❌ "See pricing details [here](https://www.apollographql.com/pricing/)."
* ✅ "For details, see our [pricing page](https://www.apollographql.com/pricing/)."

#### Code font

Use code font when mentioning any of the following within a sentence:

* Any symbol that appears in code (keywords, class names, variables, functions, and so on). Don’t surround strings in quotes.
* CLI commands (`npm start`) or command names ("the `npm` command")
* Any value a user inputs into a terminal or GUI (`0`, `yes`, `MyFirstProject`, `CTRL+C`) 
* File paths (`src/index.js`) 
* Non-link URLs (`http://localhost:8000`)

#### Bold

Use **bold** for the following:

* The name of a button or other labeled interactable that a user clicks ("Click **Save**.")
* The first mention of a term that the reader might not be familiar with ("**Resolvers** provide the instructions for turning a GraphQL operation into data.")
* A single sentence or phrase that makes a critical clarification ("**Do not commit this file to version control.**").
    * **Do not bold multiple sentences in a row. It tires the reader and reduces the attention-grabbing effect. See?**
* Optional extra emphasis on negative or "restricting" phrases ("The following features are **only available with a paid plan**", "The following features are **no longer available**")

#### Italics

Use _italics_ for the following:

* Optional emphasis to distinguish between two similar entities ("A single query can include both local-only fields _and_ fields that are fetched from your GraphQL server.")
* Optional stylizing of words and phrases, such as to represent an internal monologue ("Then we thought, _what if we could do it in half the time?_")

In general, italics are easier to miss than other markup, so it’s best to use them only in situations where it’s not a big deal if the reader doesn’t notice them at all.


## Word usage

### Products and features

Never use articles or possessives in front of standalone, proper product/feature names, unless the product/feature has an article _in_ the name: 

* ❌ The Apollo Server can integrate with Node.js middleware.
* ❌ Your Apollo Server can integrate with Node.js middleware.
* ✅ Apollo Server can integrate with Node.js middleware.
* ✅ The Apollo CLI provides commands for schema management.

Use articles and possessives in front of _components_ of a product:

* ❌ Obtain an API key from Studio settings page.
* ✅ Obtain an API key from the Studio settings page.

### Spelling of common terms

| Term | Notes |
|------|-------|
| **backend / back-end** | "backend" is a noun, "back-end" is an adjective. |
| **backward compatible** | Not "backwards compatible". Use "backward-compatible" when placed in front of the noun it modifies (e.g., "a backward-compatible solution") |
| **`CTRL+C`** | Use this format for key combinations. | 
| **`curl`** | Technically this library is "cURL", but stick with `curl`. Don't use as a verb. Instead, say "run the following `curl` command" or similar. |
| **data graph** | Not "datagraph" |
| **Enterprise plan** | Not "enterprise plan" or "Enterprise Plan". Don't put quotation marks around plan names. |
| **Free plan** | See **Enterprise plan**. |
| **frontend / front-end** | See **backend**. |
| **iOS** | |
| **JavaScript** | Not "javascript" or "Javascript" |
| **log in / login** | "log in" is a verb, "login" is a noun. You "log in to" something, you do not "log into" something.|
| **log out / logout** | See **log in**. |
| **MacOS** | |
| **no-worries billing** | Always use a hyphen. Don't capitalize unless required by the context. Don't use quotation marks. |
| **Node.js** | Not "Node" or "NodeJS" |
| **set up / setup** | "set up" is a verb, "setup" is a noun. Do not separate "set" and "up" (i.e., "set up your application", NOT "set your application up") |
| **single sign-on (SSO)** | After the first use of "single sign-on (SSO)" in a piece of content, you can use "SSO" for the rest of that piece. |
| **Team plan** | See **Enterprise plan**. |
| **URL** | |	

### Discouraged words and replacements

| Word | Replacement(s) |
|------|-------|
| **may** | **might** (if referring to a potential occurrence), **can** (if referring to a permitted action) |
| **utilize** | **use** |
| **leverage** | **use** |
| **while** | **although** (in situations where they're synonyms), OK elsewhere |
| **since** | **because** (in situations where they're synonyms), OK elsewhere |
| **as** | **because** (in situations where they're synonyms), OK elsewhere |
| **rather than** | **instead of** |
| **chance** | **opportunity** (in situations where they're synonyms), **possibility** or **risk** |
| **once** | **after** (in situations where they're synonyms), OK elsewhere | 
| **at once** | **at the same time** or **simultaneously** (when they're synonyms), **immediately** (when they're synonyms) |
| **foo / bar** | Use variable names that indicate the purpose of the variable. |
