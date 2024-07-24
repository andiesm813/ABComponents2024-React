import { IgrButton, IgrButtonModule, IgrCombo, IgrComboModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrStep, IgrStepper, IgrStepperModule } from '@infragistics/igniteui-react';
import { IgrDatePicker, IgrDatePickerModule } from '@infragistics/igniteui-react-inputs';
import { useRef } from 'react';
import { useGetBoxOfficeRevenue } from '../hooks/financial-hooks';
import styles from './stepper.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrComboModule.register();
IgrDatePickerModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrStepperModule.register();

export default function Stepper() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const stepper2 = useRef<IgrStepper>(null);
  const stepper3 = useRef<IgrStepper>(null);
  const stepper4 = useRef<IgrStepper>(null);
  const { financialBoxOfficeRevenue } = useGetBoxOfficeRevenue();

  return (
    <>
      <div className={classes("row-layout stepper-container")}>
        <IgrStepper titlePosition="bottom" ref={stepper2} className={classes("stepper")}>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <IgrInput label="Label" placeholder="This is the placeholder" outlined="true" className={classes("user-input")} key={uuid()}></IgrInput>
              <IgrInput label="Label" placeholder="This is the placeholder" outlined="true" className={classes("user-input")} key={uuid()}></IgrInput>
              <div className={classes("row-layout group")} key={uuid()}>
                <IgrButton size="large" clicked={() => stepper2?.current?.next()} className={classes("button")}>
                  <span key={uuid()}>Next</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Address</p>
          </IgrStep>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <p className={classes("typography__body-1 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <div className={classes("row-layout group")} key={uuid()}>
                <IgrButton size="large" clicked={() => stepper2?.current?.prev()} className={classes("button")}>
                  <span key={uuid()}>Prev</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton size="large" clicked={() => stepper2?.current?.next()} className={classes("button")}>
                  <span key={uuid()}>Next</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep optional="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <p className={classes("typography__body-1 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <div className={classes("row-layout group")} key={uuid()}>
                <IgrButton size="large" clicked={() => stepper2?.current?.prev()} className={classes("button")}>
                  <span key={uuid()}>Prev</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton size="large" clicked={() => stepper2?.current?.reset()} className={classes("button")}>
                  <span key={uuid()}>Reset</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Wrap</p>
            <p slot="subtitle" key={uuid()}>(Optional)</p>
          </IgrStep>
        </IgrStepper>
        <IgrStepper orientation="vertical" titlePosition="bottom" ref={stepper3} className={classes("stepper")}>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <div className={classes("group_1")} key={uuid()}>
                <IgrDatePicker label="Date"></IgrDatePicker>
              </div>
              <IgrInput label="Label" placeholder="This is the placeholder" outlined="true" className={classes("user-input")} key={uuid()}></IgrInput>
              <IgrInput label="Label" placeholder="This is the placeholder" outlined="true" className={classes("user-input")} key={uuid()}></IgrInput>
              <div className={classes("row-layout group")} key={uuid()}>
                <IgrButton size="large" clicked={() => stepper3?.current?.next()} className={classes("button")}>
                  <span key={uuid()}>Next</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Address</p>
          </IgrStep>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <p className={classes("typography__body-1 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <div className={classes("row-layout group")} key={uuid()}>
                <IgrButton size="large" clicked={() => stepper3?.current?.prev()} className={classes("button")}>
                  <span key={uuid()}>Prev</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton size="large" clicked={() => stepper3?.current?.next()} className={classes("button")}>
                  <span key={uuid()}>Next</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep optional="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <p className={classes("typography__body-1 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <div className={classes("row-layout group")} key={uuid()}>
                <IgrButton size="large" clicked={() => stepper3?.current?.prev()} className={classes("button")}>
                  <span key={uuid()}>Prev</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton size="large" clicked={() => stepper3?.current?.reset()} className={classes("button")}>
                  <span key={uuid()}>Reset</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Wrap</p>
            <p slot="subtitle" key={uuid()}>(Optional)</p>
          </IgrStep>
        </IgrStepper>
        <IgrStepper orientation="vertical" titlePosition="bottom" ref={stepper4} className={classes("stepper")}>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <IgrCombo outlined="true" data={financialBoxOfficeRevenue} label="Label/Placeholder" placeholder="Placeholder" displayKey="Franchise" singleSelect="true" className={classes("user-input")} key={uuid()}></IgrCombo>
              <IgrInput label="Label" placeholder="This is the placeholder" outlined="true" className={classes("user-input")} key={uuid()}></IgrInput>
              <IgrInput label="Label" placeholder="This is the placeholder" outlined="true" className={classes("user-input")} key={uuid()}></IgrInput>
              <div className={classes("row-layout group")} key={uuid()}>
                <IgrButton size="large" clicked={() => stepper4?.current?.next()} className={classes("button")}>
                  <span key={uuid()}>Next</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Address</p>
          </IgrStep>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <p className={classes("typography__body-1 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <div className={classes("row-layout group")} key={uuid()}>
                <IgrButton size="large" clicked={() => stepper4?.current?.prev()} className={classes("button")}>
                  <span key={uuid()}>Prev</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton size="large" clicked={() => stepper4?.current?.next()} className={classes("button")}>
                  <span key={uuid()}>Next</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep optional="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <p className={classes("typography__body-1 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
              <div className={classes("row-layout group")} key={uuid()}>
                <IgrButton size="large" clicked={() => stepper4?.current?.prev()} className={classes("button")}>
                  <span key={uuid()}>Prev</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton size="large" clicked={() => stepper4?.current?.reset()} className={classes("button")}>
                  <span key={uuid()}>Reset</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <p slot="title" key={uuid()}>Wrap</p>
            <p slot="subtitle" key={uuid()}>(Optional)</p>
          </IgrStep>
        </IgrStepper>
      </div>
    </>
  );
}
