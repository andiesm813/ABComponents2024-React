import { IgrAccordion, IgrAccordionModule, IgrAvatar, IgrAvatarModule, IgrBadge, IgrBadgeModule, IgrButton, IgrButtonGroup, IgrButtonGroupModule, IgrButtonModule, IgrCalendar, IgrCalendarModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrCheckbox, IgrCheckboxModule, IgrCombo, IgrComboModule, IgrDialog, IgrDialogModule, IgrExpansionPanel, IgrExpansionPanelModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrList, IgrListHeader, IgrListHeaderModule, IgrListItem, IgrListModule, IgrRadio, IgrRadioGroup, IgrRadioGroupModule, IgrRadioModule, IgrRangeSlider, IgrRangeSliderModule, IgrRating, IgrRatingModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule, IgrSlider, IgrSliderModule, IgrSnackbar, IgrSnackbarModule, IgrStep, IgrStepper, IgrStepperModule, IgrSwitch, IgrSwitchModule, IgrTab, IgrTabPanel, IgrTabs, IgrTabsModule, IgrTextarea, IgrTextareaModule, IgrToggleButton, IgrToggleButtonModule, IgrTree, IgrTreeItem, IgrTreeModule } from '@infragistics/igniteui-react';
import { IgrCategoryChart, IgrCategoryChartModule } from '@infragistics/igniteui-react-charts';
import { IgrColumn, IgrGrid, IgrGridModule } from '@infragistics/igniteui-react-grids';
import { IgrDatePicker, IgrDatePickerModule } from '@infragistics/igniteui-react-inputs';
import { useRef, useState } from 'react';
import { useGetBoxOfficeRevenue } from '../hooks/financial-hooks';
import { useGetEmployees } from '../hooks/northwind-hooks';
import '@infragistics/igniteui-react-grids/grids';
import styles from './all-components.module.css';
import createClassTransformer from '../style-utils';

IgrAccordionModule.register();
IgrAvatarModule.register();
IgrBadgeModule.register();
IgrButtonGroupModule.register();
IgrButtonModule.register();
IgrCalendarModule.register();
IgrCardModule.register();
IgrCategoryChartModule.register();
IgrCheckboxModule.register();
IgrComboModule.register();
IgrDatePickerModule.register();
IgrDialogModule.register();
IgrExpansionPanelModule.register();
IgrGridModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrListHeaderModule.register();
IgrListModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();
IgrRangeSliderModule.register();
IgrRatingModule.register();
IgrRippleModule.register();
IgrSelectModule.register();
IgrSliderModule.register();
IgrSnackbarModule.register();
IgrStepperModule.register();
IgrSwitchModule.register();
IgrTabsModule.register();
IgrTextareaModule.register();
IgrToggleButtonModule.register();
IgrTreeModule.register();

export default function AllComponents() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const stepper = useRef<IgrStepper>(null);
  const stepper1 = useRef<IgrStepper>(null);
  const snackbar = useRef<IgrSnackbar>(null);
  const dialog = useRef<IgrDialog>(null);
  const [value, setValue] = useState<number | undefined>(0);
  const [value1, setValue1] = useState<number | undefined>(50);
  const [value2, setValue2] = useState<string | undefined>('1');
  const [checked, setChecked] = useState<boolean | undefined>(true);
  const [value3, setValue3] = useState<number | undefined>(1);
  const [value4, setValue4] = useState<number | undefined>(2);
  const [value5, setValue5] = useState<number | undefined>(4);
  const { financialBoxOfficeRevenue } = useGetBoxOfficeRevenue();
  const { northwindEmployees } = useGetEmployees();

  return (
    <>
      <div className={classes("column-layout all-components-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <IgrTabs className={classes("tabs")}>
              <IgrTab selected="true" key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Expanders and Lists</span>
              </IgrTab>
              <IgrTabPanel className={classes("column-layout tab-item-content")} key={uuid()}>
                <IgrAccordion className={classes("accordion")} key={uuid()}>
                  <IgrExpansionPanel key={uuid()}>
                    <p className={classes("typography__body-2 text")} key={uuid()}>
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                    </p>
                    <span slot="title" key={uuid()}>Title goes here...</span>
                  </IgrExpansionPanel>
                  <IgrExpansionPanel key={uuid()}>
                    <p className={classes("typography__body-2 text")} key={uuid()}>
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                    </p>
                    <span slot="title" key={uuid()}>Title goes here...</span>
                  </IgrExpansionPanel>
                  <IgrExpansionPanel key={uuid()}>
                    <p className={classes("typography__body-2 text")} key={uuid()}>
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                    </p>
                    <span slot="title" key={uuid()}>Title goes here...</span>
                  </IgrExpansionPanel>
                </IgrAccordion>
                <IgrList className={classes("list")} key={uuid()}>
                  <IgrListHeader key={uuid()}>
                    <div key={uuid()}>Header</div>
                  </IgrListHeader>
                  <IgrListItem key={uuid()}>
                    <div slot="title" key={uuid()}>Single Line Item Default</div>
                    <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>keyboard_arrow_right</span>
                    </span>
                  </IgrListItem>
                  <IgrListItem key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrAvatar src="/src/assets/7e86e8b8b495deb8eefcdd3556151a40532211e1.png" shape="circle" className={classes("avatar")}></IgrAvatar>
                    </div>
                    <div slot="title" key={uuid()}>Avatar + Title</div>
                  </IgrListItem>
                  <IgrListItem key={uuid()}>
                    <div slot="subtitle" key={uuid()}>Single Line</div>
                  </IgrListItem>
                  <IgrListItem key={uuid()}>
                    <div slot="title" key={uuid()}>Default with Subtitle</div>
                    <div slot="subtitle" key={uuid()}>Subtitle...</div>
                    <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>keyboard_arrow_right</span>
                    </span>
                  </IgrListItem>
                  <IgrListItem key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrAvatar shape="circle">
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>person</span>
                        </span>
                      </IgrAvatar>
                    </div>
                    <div slot="title" key={uuid()}>Default with Subtitle and Avatar</div>
                    <div slot="subtitle" key={uuid()}>Subtitle...</div>
                    <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>keyboard_arrow_right</span>
                    </span>
                  </IgrListItem>
                  <IgrListItem key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrAvatar src="/src/assets/d4c387693b4db8c8354a14897762a46dcf820844.png" shape="circle" className={classes("avatar_1")}></IgrAvatar>
                    </div>
                    <div slot="title" key={uuid()}>Image Avatar</div>
                    <div slot="subtitle" key={uuid()}>Subtitle...</div>
                    <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>keyboard_arrow_right</span>
                    </span>
                  </IgrListItem>
                  <IgrListItem key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrAvatar initials="AB" shape="circle"></IgrAvatar>
                    </div>
                    <div slot="title" key={uuid()}>Initials Avatar</div>
                    <div slot="subtitle" key={uuid()}>Subtitle...</div>
                    <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>keyboard_arrow_right</span>
                    </span>
                  </IgrListItem>
                </IgrList>
              </IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Tree &amp; Sliders</span>
              </IgrTab>
              <IgrTabPanel className={classes("column-layout tab-item-content_1")} key={uuid()}>
                <IgrTree selection="none" className={classes("tree")} key={uuid()}>
                  <IgrTreeItem label="Design" key={uuid()}>
                    <IgrTreeItem label="Figma" key={uuid()}></IgrTreeItem>
                    <IgrTreeItem label="Adobe XD" key={uuid()}></IgrTreeItem>
                    <IgrTreeItem label="Sketch" key={uuid()}></IgrTreeItem>
                  </IgrTreeItem>
                  <IgrTreeItem label="Development" key={uuid()}>
                    <IgrTreeItem label="Angular" key={uuid()}></IgrTreeItem>
                    <IgrTreeItem label="Blazor" key={uuid()}></IgrTreeItem>
                    <IgrTreeItem label="Web components" disabled="true" key={uuid()}></IgrTreeItem>
                  </IgrTreeItem>
                </IgrTree>
                <div className={classes("column-layout group_2")} key={uuid()}>
                  <IgrSlider min="0" max="100" step="10" discreteTrack="true" value={value} change={(_c, e) => setValue(e.detail)} className={classes("slider")}></IgrSlider>
                  <IgrRangeSlider lower="10" upper="40" min="0" max="100" step="10" discreteTrack="true" className={classes("range-slider")}></IgrRangeSlider>
                  <IgrSlider min="0" max="100" primaryTicks="3" secondaryTicks="2" value={value} change={(_c, e) => setValue(e.detail)} className={classes("slider")}></IgrSlider>
                  <IgrSlider min="0" max="100" step="10" discreteTrack="true" value={value1} change={(_c, e) => setValue1(e.detail)} className={classes("slider")}></IgrSlider>
                  <IgrSlider disabled="true" min="0" max="100" step="10" discreteTrack="true" value={value} change={(_c, e) => setValue(e.detail)} className={classes("slider")}></IgrSlider>
                </div>
              </IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Stepper</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content_1")} key={uuid()}>
                <IgrStepper titlePosition="bottom" ref={stepper} className={classes("stepper")} key={uuid()}>
                  <IgrStep invalid="true" key={uuid()}>
                    <div className={classes("column-layout step-content")} key={uuid()}>
                      <p className={classes("typography__body-1 text")} key={uuid()}>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
                      </p>
                      <div className={classes("row-layout group_3")} key={uuid()}>
                        <IgrButton size="large" clicked={() => stepper?.current?.next()} className={classes("button")}>
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
                      <div className={classes("row-layout group_3")} key={uuid()}>
                        <IgrButton size="large" clicked={() => stepper?.current?.prev()} className={classes("button")}>
                          <span key={uuid()}>Prev</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                        <IgrButton size="large" clicked={() => stepper?.current?.next()} className={classes("button")}>
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
                      <div className={classes("row-layout group_3")} key={uuid()}>
                        <IgrButton size="large" clicked={() => stepper?.current?.prev()} className={classes("button")}>
                          <span key={uuid()}>Prev</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                        <IgrButton size="large" clicked={() => stepper?.current?.reset()} className={classes("button")}>
                          <span key={uuid()}>Reset</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                      </div>
                    </div>
                    <p slot="title" key={uuid()}>Wrap</p>
                    <p slot="subtitle" key={uuid()}>(Optional)</p>
                  </IgrStep>
                </IgrStepper>
              </IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Cards</span>
              </IgrTab>
              <IgrTabPanel className={classes("column-layout tab-item-content_2")} key={uuid()}>
                <IgrCard className={classes("card")} key={uuid()}>
                  <div className={classes("group_4")} key={uuid()}>
                    <IgrCardHeader>
                      <div slot="thumbnail" key={uuid()}>
                        <IgrAvatar shape="circle" key={uuid()}>
                          <span className={classes("material-icons")} key={uuid()}>
                            <span key={uuid()}>person</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Title goes here...</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>Subtitle goes here...</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <p className={classes("typography__body-1 text")} key={uuid()}>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                      </p>
                    </IgrCardContent>
                  </div>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/SketchParser.png" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                </IgrCard>
                <IgrCard className={classes("card_1")} key={uuid()}>
                  <IgrCardHeader key={uuid()}>
                    <div slot="thumbnail" key={uuid()}>
                      <IgrAvatar shape="circle" key={uuid()}>
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>person</span>
                        </span>
                      </IgrAvatar>
                    </div>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Title goes here...</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Subtitle goes here...</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                    <img src="/src/assets/SketchParser.png" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" size="large" className={classes("button_1")}>
                        <span key={uuid()}>Button</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat">
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>favorite</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat">
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>bookmark</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat">
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>share</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
                <IgrCard className={classes("card")} key={uuid()}>
                  <div className={classes("group_5")} key={uuid()}>
                    <div className={classes("row-layout")}>
                      <IgrCardHeader>
                        <div slot="thumbnail" key={uuid()}>
                          <IgrCardMedia className={classes("media-content_2")} key={uuid()}>
                            <img src="/src/assets/SketchParser.png" key={uuid()} />
                          </IgrCardMedia>
                        </div>
                        <h3 slot="title" key={uuid()}>
                          <span key={uuid()}>Title goes here...</span>
                        </h3>
                        <h5 slot="subtitle" key={uuid()}>
                          <span key={uuid()}>Subtitle goes here...</span>
                        </h5>
                      </IgrCardHeader>
                    </div>
                    <IgrCardContent className={classes("body-content")}>
                      <p className={classes("typography__body-1 text")} key={uuid()}>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                      </p>
                    </IgrCardContent>
                  </div>
                  <span className={classes("divider")} key={uuid()}>Divider not yet available in React</span>
                  <IgrCardActions className={classes("igx-card-actions--justify actions-content_1")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat">
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>favorite</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat">
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>bookmark</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat">
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>share</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
              </IgrTabPanel>
              <IgrTab disabled="true" key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Disabled</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content_1")} key={uuid()}></IgrTabPanel>
            </IgrTabs>
          </div>
          <div className={classes("column-layout group_6")}>
            <IgrStepper orientation="vertical" titlePosition="bottom" ref={stepper1} className={classes("stepper")}>
              <IgrStep invalid="true" key={uuid()}>
                <div className={classes("column-layout step-content_1")} key={uuid()}>
                  <IgrInput label="Label" placeholder="Placholder" outlined="true" className={classes("user-input")} key={uuid()}>
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
                  <IgrInput label="Label" placeholder="Placholder" outlined="true" className={classes("user-input")} key={uuid()}>
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
                  <IgrInput label="Label" placeholder="Placholder" outlined="true" className={classes("user-input")} key={uuid()}>
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
                  <div className={classes("row-layout group_3")} key={uuid()}>
                    <IgrButton size="large" clicked={() => stepper1?.current?.next()} className={classes("button")}>
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
                  <div className={classes("row-layout group_3")} key={uuid()}>
                    <IgrButton size="large" clicked={() => stepper1?.current?.prev()} className={classes("button")}>
                      <span key={uuid()}>Prev</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrButton size="large" clicked={() => stepper1?.current?.next()} className={classes("button")}>
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
                  <div className={classes("row-layout group_3")} key={uuid()}>
                    <IgrButton size="large" clicked={() => stepper1?.current?.prev()} className={classes("button")}>
                      <span key={uuid()}>Prev</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrButton size="large" clicked={() => stepper1?.current?.reset()} className={classes("button")}>
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
          <div className={classes("column-layout group_7")}>
            <div className={classes("row-layout group_8")}>
              <IgrButton size="large" clicked={() => dialog?.current?.toggle()} className={classes("button_1")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>add</span>
                </span>
                <span key={uuid()}>Open Dialog</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton disabled="true" size="large" className={classes("button_1")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>add</span>
                </span>
                <span key={uuid()}>Button</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton variant="outlined" size="large" className={classes("button_1")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>add</span>
                </span>
                <span key={uuid()}>Open Banner</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton variant="outlined" disabled="true" size="large" className={classes("button_1")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>add</span>
                </span>
                <span key={uuid()}>Button</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton variant="flat" size="large" clicked={() => snackbar?.current?.toggle()} className={classes("button_1")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>add</span>
                </span>
                <span key={uuid()}>Open Snackbar</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton variant="flat" disabled="true" size="large" className={classes("button_1")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>add</span>
                </span>
                <span key={uuid()}>Button</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrIconButton variant="flat">
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>email</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
              <IgrButton variant="fab" size="large" className={classes("user-input_2")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>add</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton variant="fab" size="large" className={classes("user-input_2")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>add</span>
                </span>
                <span key={uuid()}>FAB</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
            <IgrButtonGroup className={classes("user-input")}>
              <IgrToggleButton key={uuid()}>
                <span key={uuid()}>Button</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrToggleButton>
              <IgrToggleButton key={uuid()}>
                <span key={uuid()}>Button</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrToggleButton>
              <IgrToggleButton key={uuid()}>
                <span key={uuid()}>Button</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrToggleButton>
            </IgrButtonGroup>
            <div className={classes("row-layout group_9")}>
              <span className={classes("material-icons icon_1")}>
                <span key={uuid()}>mail</span>
              </span>
              <span className={classes("material-icons icon")}>
                <span key={uuid()}>mail</span>
              </span>
              <span className={classes("material-icons icon_2")}>
                <span key={uuid()}>mail</span>
              </span>
              <span className={classes("material-icons icon_3")}>
                <span key={uuid()}>mail</span>
              </span>
              <IgrBadge className={classes("badge")}>
                <span key={uuid()}>Badge</span>
              </IgrBadge>
              <IgrBadge className={classes("badge")}>
                <span key={uuid()}>1</span>
              </IgrBadge>
              <IgrBadge className={classes("badge")}>
                <span key={uuid()}>10</span>
              </IgrBadge>
              <IgrBadge className={classes("badge")}>
                <span key={uuid()}>1000</span>
              </IgrBadge>
              <IgrBadge className={classes("badge")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>mail</span>
                </span>
              </IgrBadge>
            </div>
            <div className={classes("row-layout group_2")}>
              <div className={classes("column-layout group_10")}>
                <IgrCheckbox labelPosition="after" className={classes("user-input_2")}>
                  <span key={uuid()}>Label</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" className={classes("user-input_2")}>
                  <span key={uuid()}>Label</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" className={classes("user-input_2")}>
                  <span key={uuid()}>Label</span>
                </IgrCheckbox>
              </div>
              <IgrRadioGroup value={value2} Change={(_c, e) => setValue2(e.target.value)} className={classes("user-input_2")}>
                <IgrRadio value="1" key="42852a21-6be5-46bb-8992-17deee642b02" className={classes("radio")}>
                  <span key={uuid()}>Label</span>
                </IgrRadio>
                <IgrRadio value="2" key="3c273e24-c952-4f14-ba4c-ec817906dc07" className={classes("radio")}>
                  <span key={uuid()}>Label</span>
                </IgrRadio>
                <IgrRadio value="3" key="5e1096f2-f0fa-4775-a5cc-b2a773af3713" className={classes("radio")}>
                  <span key={uuid()}>Label</span>
                </IgrRadio>
              </IgrRadioGroup>
              <div className={classes("column-layout group_11")}>
                <IgrRadioGroup alignment="horizontal" value={value2} Change={(_c, e) => setValue2(e.target.value)} className={classes("user-input_2")}>
                  <IgrRadio value="1" key="a2a8fc9b-1d57-4287-be25-f2d2ca2767d1" className={classes("radio")}>
                    <span key={uuid()}>Label</span>
                  </IgrRadio>
                  <IgrRadio value="2" key="e4821e37-fd56-4c61-a1ff-6b249f4115c4" className={classes("radio")}>
                    <span key={uuid()}>Label</span>
                  </IgrRadio>
                  <IgrRadio value="3" key="66341e1a-9a8e-4ad8-baac-a54a4e6c3a74" className={classes("radio")}>
                    <span key={uuid()}>Label</span>
                  </IgrRadio>
                </IgrRadioGroup>
                <div className={classes("row-layout group_12")}>
                  <IgrSwitch className={classes("user-input_2")}>
                    <span key={uuid()}>Label</span>
                  </IgrSwitch>
                  <IgrSwitch disabled="true" className={classes("user-input_2")}>
                    <span key={uuid()}>Label</span>
                  </IgrSwitch>
                  <IgrSwitch labelPosition="before" checked={checked} change={(_c, e) => setChecked(e.detail)} className={classes("user-input_2")}>
                    <span key={uuid()}>Label</span>
                  </IgrSwitch>
                  <IgrSwitch labelPosition="before" disabled="true" checked={checked} change={(_c, e) => setChecked(e.detail)} className={classes("user-input_2")}>
                    <span key={uuid()}>Label</span>
                  </IgrSwitch>
                </div>
              </div>
            </div>
            <div className={classes("row-layout group_2")}>
              <IgrRating label="Label" size="large" value={value3} change={(_c, e) => setValue3(e.detail)} className={classes("user-input_2")}></IgrRating>
              <IgrRating label="Label" max="3" size="medium" value={value4} change={(_c, e) => setValue4(e.detail)} className={classes("user-input_2")}></IgrRating>
              <IgrRating label="Label" size="small" readonly="true" hoverPreview="true" disabled="true" value={value5} change={(_c, e) => setValue5(e.detail)} className={classes("user-input_2")}></IgrRating>
            </div>
            <div className={classes("row-layout group_13")}>
              <IgrAvatar size="large" shape="circle">
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>people</span>
                </span>
              </IgrAvatar>
              <IgrAvatar size="medium" shape="circle">
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>people</span>
                </span>
              </IgrAvatar>
              <IgrAvatar shape="circle">
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>people</span>
                </span>
              </IgrAvatar>
              <IgrAvatar initials="AB" shape="rounded" size="large"></IgrAvatar>
              <IgrAvatar initials="AB" shape="rounded" size="medium"></IgrAvatar>
              <IgrAvatar initials="AB" shape="rounded"></IgrAvatar>
              <IgrAvatar src="/src/assets/a7f211be67afc061d9571f5b5b5236cd92420e0c.png" shape="rounded" size="large" className={classes("avatar_2")}></IgrAvatar>
              <IgrAvatar src="/src/assets/a7f211be67afc061d9571f5b5b5236cd92420e0c.png" shape="rounded" size="medium" className={classes("avatar_3")}></IgrAvatar>
              <IgrAvatar src="/src/assets/a7f211be67afc061d9571f5b5b5236cd92420e0c.png" shape="rounded" className={classes("avatar_4")}></IgrAvatar>
            </div>
          </div>
          <div className={classes("column-layout group_14")}>
            <IgrInput label="Label" placeholder="Placholder" outlined="true" className={classes("user-input")}>
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
            <div className={classes("group_15")}>
              <IgrDatePicker label="Date"></IgrDatePicker>
            </div>
            <IgrTextarea label="Label/Placeholder" placeholder="Text Area Content" outlined="true" className={classes("user-input")}></IgrTextarea>
            <IgrSelect outlined="true" label="Select" placeholder="Placeholder" className={classes("user-input")}>
              <IgrSelectItem value="Option" key="320c33c2-1531-4e9f-9faf-153f60549542">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
            </IgrSelect>
            <IgrCombo outlined="true" data={financialBoxOfficeRevenue} label="Combo" placeholder="Placeholder" displayKey="Franchise" singleSelect="true" className={classes("user-input")}></IgrCombo>
            <IgrInput label="Label" placeholder="Placholder" outlined="false" className={classes("user-input")}>
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
            <div className={classes("group_15")}>
              <IgrDatePicker label="Date"></IgrDatePicker>
            </div>
            <IgrTextarea label="Label/Placeholder" placeholder="Text Area Content" outlined="false" className={classes("user-input")}></IgrTextarea>
            <IgrSelect outlined="false" label="Select" placeholder="Placeholder" className={classes("user-input")}>
              <IgrSelectItem value="Option" key="bbd7cfd1-82e7-4fef-a8fd-ee00e807991c">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
            </IgrSelect>
            <IgrCombo data={financialBoxOfficeRevenue} label="Combo" placeholder="Placeholder" displayKey="Franchise" outlined="false" singleSelect="true" className={classes("user-input")}></IgrCombo>
          </div>
          <div className={classes("column-layout group_16")}>
            <IgrCalendar hideHeader="Horizontal" headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
            <IgrCard className={classes("card_2")}>
              <IgrCardMedia className={classes("media-content_3")} key={uuid()}>
                <img src="/src/assets/SketchParser.png" className={classes("image")} key={uuid()} />
              </IgrCardMedia>
              <IgrCardHeader key={uuid()}>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Title goes here...</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Subtitle goes here...</span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")} key={uuid()}>
                <p className={classes("typography__body-2 text")} key={uuid()}>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                </p>
              </IgrCardContent>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrButton variant="flat" size="large" className={classes("button_1")}>
                    <span key={uuid()}>Button</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>favorite</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>bookmark</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
              </IgrCardActions>
            </IgrCard>
          </div>
        </div>
        <div className={classes("row-layout group_17")}>
          <div className={classes("group_18")}>
            <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="Line" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
          </div>
          <div className={classes("group_18")}>
            <IgrCategoryChart dataSource={financialBoxOfficeRevenue} computedPlotAreaMarginMode="Series"></IgrCategoryChart>
          </div>
          <IgrGrid data={northwindEmployees} primaryKey="employeeID" displayDensity="cosy" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
            <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="lastName" dataType="string" header="lastName" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="firstName" dataType="string" header="firstName" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="title" dataType="string" header="title" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="hireDate" dataType="date" header="hireDate" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.street" dataType="string" header="address street" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.city" dataType="string" header="address city" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.region" dataType="string" header="address region" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.country" dataType="string" header="address country" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.phone" dataType="string" header="address phone" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="managerID" dataType="number" header="managerID" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="notes" dataType="string" header="notes" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable="true" selectable="false"></IgrColumn>
          </IgrGrid>
        </div>
        <IgrSnackbar actionText="Action" action={() => snackbar?.current?.toggle()} ref={snackbar} className={classes("notification")}>
          <span key={uuid()}>This is a message</span>
        </IgrSnackbar>
        <IgrDialog closeOnOutsideClick="true" ref={dialog}>
          <h5 slot="title" key={uuid()}>
            <span>Confirmation</span>
          </h5>
          <p key={uuid()}>Are you sure you want to do this?</p>
          <div slot="footer" key={uuid()}>
            <IgrButton variant="flat" size="large" clicked={() => dialog?.current?.toggle()} key={uuid()}>
              <span key={uuid()}>Cancel</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" size="large" clicked={() => dialog?.current?.toggle()} key={uuid()}>
              <span key={uuid()}>OK</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
        <span className={classes("notification")}>Banner not yet available in React</span>
      </div>
    </>
  );
}
