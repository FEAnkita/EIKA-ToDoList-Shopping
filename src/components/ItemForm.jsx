import FormDataField from './FormDataField';
export default function ItemForm({ formEventHandler, formData }) {
    const { errors, touched, values } = formData;
    const { handleBlur, handleChange } = formEventHandler;

  return (
          <> 
        {/* <h4>Add item to your list</h4> */}
        <FormDataField
          handleBlur={handleBlur}
          handleChange={handleChange}
          values={values}
          fieldName={"productName"}
          inputType={"text"}
          placeholder="e.g. VÖXLOV"
          label={"Product name"}
        />
        <span className="error">
          {touched.productName && errors.productName}
        </span>

        <FormDataField
          handleBlur={handleBlur}
          handleChange={handleChange}
          values={values}
          fieldName={"price"}
          inputType={"number"}
          placeholder="e.g. 300"
          label={"Product price"}
        />
        <span className="error">{touched.price && errors.price}</span>
        </>
  );
}
