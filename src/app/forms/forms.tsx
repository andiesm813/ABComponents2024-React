import { IgrCombo, IgrComboModule, IgrDateTimeInput, IgrDateTimeInputModule, IgrInput, IgrInputModule, IgrSelect, IgrSelectHeader, IgrSelectHeaderModule, IgrSelectItem, IgrSelectModule, IgrTextarea, IgrTextareaModule } from '@infragistics/igniteui-react';
import { IgrDatePicker, IgrDatePickerModule } from '@infragistics/igniteui-react-inputs';
import { useState } from 'react';
import { useGetBoxOfficeRevenue } from '../hooks/financial-hooks';
import styles from './forms.module.css';
import createClassTransformer from '../style-utils';

IgrComboModule.register();
IgrDatePickerModule.register();
IgrDateTimeInputModule.register();
IgrInputModule.register();
IgrSelectHeaderModule.register();
IgrSelectModule.register();
IgrTextareaModule.register();

export default function Forms() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<string | undefined>('5');
  const [value1, setValue1] = useState<number | undefined>(10);
  const [value2, setValue2] = useState<string | undefined>('vvxcvxcvxcv');
  const [value3, setValue3] = useState<string | undefined>('cvxcvxcvxc');
  const [value4, setValue4] = useState<string | undefined>('1');
  const { financialBoxOfficeRevenue } = useGetBoxOfficeRevenue();

  return (
    <>
      <div className={classes("row-layout forms-container")}>
        <div className={classes("column-layout group")}>
          <IgrInput placeholder="Search" outlined="true" className={classes("user-input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>search</span>
              </span>
            </span>
            <span slot="suffix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>clear</span>
              </span>
            </span>
          </IgrInput>
          <div className={classes("row-layout group_1")}>
            <IgrInput outlined="true" className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
            <IgrInput label="Just Label" outlined="true" className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
          </div>
          <div className={classes("row-layout group_1")}>
            <IgrInput placeholder="Just Placeholder" outlined="true" className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
            <IgrInput label="Label" placeholder="Placeholder" outlined="true" value={value} change={(_c, e) => setValue(e.detail)} className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
              <span slot="helper-text" key={uuid()}>sample hint text</span>
            </IgrInput>
          </div>
          <div className={classes("row-layout group_1")}>
            <IgrInput type="number" label="Duration" placeholder="Placholder" outlined="true" className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
            <IgrInput type="number" label="Duration" placeholder="Placholder" outlined="true" value={value1?.toString()} change={(_c, e) => setValue1(parseFloat(e.detail))} className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
          </div>
          <div className={classes("row-layout group_1")}>
            <IgrInput type="email" label="Email address" placeholder="Placeholder" outlined="true" className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>email</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
            <IgrInput type="password" label="Password" placeholder="Placeholder" outlined="true" value={value2} change={(_c, e) => setValue2(e.detail)} className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>lock</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
          </div>
          <IgrInput type="tel" label="Phone" placeholder="Placeholder" outlined="true" value={value3} change={(_c, e) => setValue3(e.detail)} className={classes("user-input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>phone</span>
              </span>
            </span>
            <span slot="suffix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>clear</span>
              </span>
            </span>
          </IgrInput>
          <div className={classes("row-layout group_1")}>
            <IgrDateTimeInput label="Date" Placeholder="Placeholder" outlined="true" className={classes("date-time-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>calendar_month</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrDateTimeInput>
            <div className={classes("group_2")}>
              <IgrDatePicker label="Date"></IgrDatePicker>
            </div>
          </div>
          <IgrTextarea label="Label/Placeholder" placeholder="Text Area Content" outlined="true" className={classes("user-input")}></IgrTextarea>
          <div className={classes("row-layout group_1")}>
            <IgrSelect outlined="true" label="Select" placeholder="Placeholder" className={classes("user-input_2")}>
              <IgrSelectHeader key={uuid()}>
                <span key={uuid()}>Option</span>
              </IgrSelectHeader>
              <IgrSelectItem value="Option" key="6706d7d8-3b4d-402b-a349-9f15250523c0">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
              <IgrSelectItem value="Option" key="a3d2875b-c928-4eb4-8ff2-945a69220ab0">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
            </IgrSelect>
            <IgrSelect outlined="true" label="Select" placeholder="Placeholder" value={value4} change={(_c, e) => setValue4(e.detail.value)} className={classes("user-input_2")}>
              <IgrSelectHeader key={uuid()}>
                <span key={uuid()}>Option</span>
              </IgrSelectHeader>
              <IgrSelectItem value="1" key="2c4ed430-8e19-45f0-977b-33a587b28b11">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
              <IgrSelectItem value="Option" key="d70da5e2-191b-48b6-9d9e-85f202680481">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
            </IgrSelect>
          </div>
          <IgrCombo outlined="true" data={financialBoxOfficeRevenue} label="Combo" placeholder="Placeholder" displayKey="Franchise" singleSelect="true" className={classes("user-input")}></IgrCombo>
        </div>
        <div className={classes("column-layout group")}>
          <IgrInput placeholder="Search" outlined="false" className={classes("user-input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>search</span>
              </span>
            </span>
            <span slot="suffix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>clear</span>
              </span>
            </span>
          </IgrInput>
          <div className={classes("row-layout group_1")}>
            <IgrInput outlined="false" className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
            <IgrInput label="Just Label" outlined="false" className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
          </div>
          <div className={classes("row-layout group_1")}>
            <IgrInput placeholder="Just Placeholder" outlined="false" className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
            <IgrInput label="Label" placeholder="Placeholder" outlined="false" value={value} change={(_c, e) => setValue(e.detail)} className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
              <span slot="helper-text" key={uuid()}>sample hint text</span>
            </IgrInput>
          </div>
          <div className={classes("row-layout group_1")}>
            <IgrInput type="number" label="Duration" placeholder="Placholder" outlined="false" className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
            <IgrInput type="number" label="Duration" placeholder="Placholder" outlined="false" value={value1?.toString()} change={(_c, e) => setValue1(parseFloat(e.detail))} className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
          </div>
          <div className={classes("row-layout group_1")}>
            <IgrInput type="email" label="Email address" placeholder="Placeholder" outlined="false" className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>email</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
            <IgrInput type="password" label="Password" placeholder="Placeholder" outlined="false" value={value2} change={(_c, e) => setValue2(e.detail)} className={classes("user-input_2")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>lock</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrInput>
          </div>
          <IgrInput type="tel" label="Phone" placeholder="Placeholder" outlined="false" value={value3} change={(_c, e) => setValue3(e.detail)} className={classes("user-input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>phone</span>
              </span>
            </span>
            <span slot="suffix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>clear</span>
              </span>
            </span>
          </IgrInput>
          <div className={classes("row-layout group_1")}>
            <IgrDateTimeInput label="Date" Placeholder="Placeholder" outlined="false" className={classes("date-time-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>calendar_month</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
            </IgrDateTimeInput>
            <div className={classes("group_2")}>
              <IgrDatePicker label="Date"></IgrDatePicker>
            </div>
          </div>
          <IgrTextarea label="Label/Placeholder" placeholder="Text Area Content" outlined="false" className={classes("user-input")}></IgrTextarea>
          <div className={classes("row-layout group_1")}>
            <IgrSelect outlined="false" label="Select" placeholder="Placeholder" className={classes("user-input_2")}>
              <IgrSelectHeader key={uuid()}>
                <span key={uuid()}>Option</span>
              </IgrSelectHeader>
              <IgrSelectItem value="Option" key="ba1de278-2506-42b9-a27e-c4267fdae48d">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
              <IgrSelectItem value="Option" key="04763265-744f-4d84-95f4-7bb157789376">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
            </IgrSelect>
            <IgrSelect outlined="false" label="Select" placeholder="Placeholder" value={value4} change={(_c, e) => setValue4(e.detail.value)} className={classes("user-input_2")}>
              <IgrSelectHeader key={uuid()}>
                <span key={uuid()}>Option</span>
              </IgrSelectHeader>
              <IgrSelectItem value="1" key="20aab59d-e20d-4358-9ffb-72ff7909c0b7">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
              <IgrSelectItem value="Option" key="9b480a9d-4d6d-40f9-b4e8-74fd174c1308">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
            </IgrSelect>
          </div>
          <IgrCombo data={financialBoxOfficeRevenue} label="Combo" placeholder="Placeholder" displayKey="Franchise" outlined="false" singleSelect="true" className={classes("user-input")}></IgrCombo>
        </div>
      </div>
    </>
  );
}
